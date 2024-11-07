<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Ticket;
use App\Models\Clients;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use App\Http\Requests\TicketRequest;
use Coderflex\LaravelTicket\Models\Label;
use Illuminate\Database\Eloquent\Builder;
use Coderflex\LaravelTicket\Models\Category;
use App\Notifications\AssignedTicketNotification;
use App\Notifications\NewTicketCreatedNotification;
use Carbon\Carbon;

class TicketController extends Controller
{

    

    public function index(Request $request): View
    {
        

// Initialize $client_id with a default string value
$client_id = "nothing";

// Query tickets with related models
$tickets = Ticket::with('user', 'clients', 'messages', 'categories', 'labels', 'assignedToUser')
    ->when($request->has('status'), function (Builder $query) use ($request) {
        return $query->where('status', $request->input('status'));
    })
    ->when($request->has('priority'), function (Builder $query) use ($request) {
        return $query->withPriority($request->input('priority'));
    })
    ->when($request->has('category'), function (Builder $query) use ($request) {
        return $query->whereRelation('categories', 'id', $request->input('category'));
    })
    ->when($request->has('search'), function ($query) use ($request) {
        $search = $request->input('search');
        $query->where(function ($query) use ($search) {
            $query->where('title', 'like', '%' . $search . '%')
                  ->orWhere('serial_number', 'like', '%' . $search . '%')
                  ->orWhereHas('clients', function ($query) use ($search) {
                      $query->where('name', 'like', '%' . $search . '%')
                            ->orWhere('address', 'like', '%' . $search . '%')
                            ->orWhere('lastname', 'like', '%' . $search . '%')
                            ->orWhere('ticket_number', 'like', '%' . $search . '%');
                  });
        });
    })
    ->when($request->has('client') && $request->input('client') !== null && !empty($request->input('client')), function (Builder $query) use ($request, &$client_id) {
        $client_id = $request->input('client'); // Update $client_id if present
        return $query->whereHas('clients', function (Builder $query) use ($request) {
            $query->where('id', $request->input('client'));
        });
    })
    ->when(auth()->user()->hasRole('agent'), function (Builder $query) {
        $query->where('assigned_to', auth()->user()->id);
    })
    ->when(auth()->user()->hasRole('user'), function (Builder $query) {
        $query->where('user_id', auth()->user()->id);
    })
    ->latest()
    ->paginate();

// Pass both $tickets and $client_id to the view
return view('tickets.index', compact('tickets', 'client_id'));


    }

    public function create(): View
    {
        $labels = Label::visible()->pluck('name', 'id');

        $categories = Category::visible()->pluck('name', 'id');

        $users = User::role('agent')->orderBy('name')->pluck('name', 'id');

        $clients = Clients::orderBy('name')->get()->map(function ($client) {
            return [
                'id' => $client->id,
                'name' => $client->name . ' ' . $client->lastname
            ];
        })->pluck('name', 'id');

    

        return view('tickets.create', compact('labels', 'categories', 'users','clients'));
    }



    public function store(TicketRequest $request)
    {
        // Get the latest ticket ID
        $latestTicketId = Ticket::latest()->value('id');
    
        // Increment the latest ticket ID by 1
        $nextTicketId = $latestTicketId + 1;
    
        // Generate ticket number by concatenating date and incremented ID
        $ticketNumber = Carbon::now()->format('my') . $nextTicketId;
       // dd($ticketNumber);
    
        $ticketData = $request->only('the_client','serial_number','title', 'message', 'status', 'priority');
        if (empty($ticketData['the_client'])) {
            $ticketData['the_client'] = '000000';
        }
        $ticketData['ticket_number'] = $ticketNumber;
    
        $ticket = auth()->user()->tickets()->create($ticketData);
    
        $ticket->attachCategories($request->input('categories'));
    
        $ticket->attachLabels($request->input('labels'));
    
        if ($request->input('assigned_to')) {
            $ticket->assignTo($request->input('assigned_to'));
            User::find($request->input('assigned_to'))->notify(new AssignedTicketNotification($ticket));
        } else {
            User::role('admin')
                ->each(fn ($user) => $user->notify(new NewTicketCreatedNotification($ticket)));
        }
    
        if (!is_null($request->input('attachments'))) {
            foreach ($request->input('attachments') as $file) {
                $ticket->addMediaFromDisk($file, 'public')->toMediaCollection('tickets_attachments');
            }
        }
    
        return to_route('tickets.index');
    }
    

    public function show(Ticket $ticket): View
    {
        $this->authorize('view', $ticket);

        $ticket->load(['media', 'messages' => fn ($query) => $query->latest()]);

        return view('tickets.show', compact('ticket'));
    }

    public function edit(Ticket $ticket): View
    {
        $this->authorize('update', $ticket);

        $labels = Label::visible()->pluck('name', 'id');

        $categories = Category::visible()->pluck('name', 'id');

        $users = User::role('agent')->orderBy('name')->pluck('name', 'id');

        $clients = Clients::orderBy('name')->pluck('name', 'id');

        return view('tickets.edit', compact('ticket', 'labels', 'categories', 'users','clients'));
    }

    public function update(TicketRequest $request, Ticket $ticket)
    {
        $this->authorize('update', $ticket);

        $ticket->update($request->only('the_client','serial_number','title', 'message', 'status', 'priority', 'assigned_to'));

        $ticket->syncCategories($request->input('categories'));

        $ticket->syncLabels($request->input('labels'));

        if ($ticket->wasChanged('assigned_to')) {
            User::find($request->input('assigned_to'))->notify(new AssignedTicketNotification($ticket));
        }

        if (!is_null($request->input('attachments')[0])) {
            foreach ($request->input('attachments') as $file) {
                $ticket->addMediaFromDisk($file, 'public')->toMediaCollection('tickets_attachments');
            }
        }

        return to_route('tickets.index');
    }

    public function destroy(Ticket $ticket)
    {
        $this->authorize('delete', $ticket);

        $ticket->delete();

        return to_route('tickets.index');
    }

    public function upload(Request $request)
    {
        $path = [];

        if ($request->file('attachments')) {
            foreach ($request->file('attachments') as $file) {
                $path = $file->store('tmp', 'public');
            }
        }

        return $path;
    }

    public function close(Ticket $ticket)
    {
        $this->authorize('update', $ticket);

        $ticket->close();

        return to_route('tickets.show', $ticket);
    }

    public function reopen(Ticket $ticket)
    {
        $this->authorize('update', $ticket);

        $ticket->reopen();

        return to_route('tickets.show', $ticket);
    }

    public function archive(Ticket $ticket)
    {
        $this->authorize('update', $ticket);

        $ticket->archive();

        return to_route('tickets.show', $ticket);
    }

    public function updateStatus(Request $request, Ticket $ticket)
    {
        // Validate the incoming request
        $request->validate([
            'status' => 'required|in:open,closed,resolved,in_progress,on_hold',
        ]);

        // Update the ticket status
        $ticket->update([
            'status' => $request->status,
        ]);

        // Return a JSON response with the updated ticket status
        return response()->json(['status' => $ticket->status]);
    }
    
    
}
