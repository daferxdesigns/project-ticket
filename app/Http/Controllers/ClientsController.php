<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Clients;
use Illuminate\Support\Facades\DB;
use Spatie\FlareClient\Http\Client;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EditClientsRequest;
use App\Http\Requests\StoreClientsRequest;
use App\Http\Requests\UpdateClientsRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class ClientsController extends Controller
{
    public function index()
    {
        return view('clients.index', [
            'clients' => DB::table('clients')
            ->orderBy('id','desc')
            ->paginate(100)

        ]); 
    }

    public function show($clients_id)
    {
        $client = Clients::find($clients_id);
        return view('clients.show',compact('client'));
    }


    public function create()
    {
        $clients = Clients::orderBy('name')->pluck('name', 'id');
        return view('clients.create', compact('clients'));
    }

    public function edit($clients_id)
    {
        
        $clients = Clients::find($clients_id);
        return view('clients.edit',compact('clients'));
    }


    public function update(UpdateClientsRequest $request, Clients $client)
    {

        $this->authorize('update', $client);
        $client->update($request->validated());
        
        return response()->json(['success' => true, 'message' => 'Client updated successfully.', 'client' => $client]);
        
    }

   
    public function store(StoreClientsRequest $request)
    {

        $user = Clients::create([
            'name' => $request['name'],
            'lastname' => $request['lastname'],
            'phone' => $request['phone'],
            'email_address' => $request['email_address'],
            'address' => $request['address'],
            'suburb' => $request['suburb'],
            'state' => $request['state'],
            'postcode' => $request['postcode'],
            'componentry' => $request['componentry'],
            'contract_date' => $request['contract_date'],
            'panels' => $request['panels'],
            'system_size' => $request['system_size'],
            'inverter' => $request['inverter'],
        ]); 

        return to_route('clients.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Http\Response
      */
    public function destroy(Request $request, $client_id)
    {
       
        $client = Clients::find($client_id);

        // Check if the client exists
        if (!$client) {
            return redirect()->route('clients.index')->with('error', 'Client not found.');
        }

        // Delete the client
        $client->delete();
       
        return to_route('clients.index');
    }
    public function search(Request $request)
    {
        $query = $request->input('query');
    
        // Initialize query builder
        $clientsQuery = Clients::query();
    
        // Apply search filter if query is provided
        if ($query) {
            $clientsQuery->where('name', 'LIKE', "%$query%")
                         ->orWhere('lastname', 'LIKE', "%$query%")
                         ->orWhere('state', 'LIKE', "%$query%")
                         ->orWhere('address', 'LIKE', "%$query%")
                         ->orWhere('email_address', 'LIKE', "%$query%")
                         ->orWhere('phone', 'LIKE', "%$query%")
                         ->orWhere('system_size', 'LIKE', "%$query%");
        }
    
        // Paginate the query results with 10 items per page
        $clients = $clientsQuery->paginate(10);
    
        return view('clients.index', compact('clients'));
    }
   
}
