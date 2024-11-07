<x-app-layout>
    <style>
        /* CSS for changing background color on hover */
        tbody tr:hover td {
            background-color: #f0f0f0;
            /* Adjust the color as needed */
        }

        .badge {
            display: inline-block;
            padding: 3px 8px;
            font-size: 12px;
            font-weight: normal;
            border-radius: 4px;
            min-width: 90px;
            text-align: center;
            margin-right: 5px;
            /* Adjust margin as needed */
            background-color: white;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .badge-technical {
            color: white;
            background-color: #30336b;
        }

        .badge-default {
            color: white;
            background-color: #4834d4;
        }

        .badge-system-issues {
            color: white;
            background-color: #f0932b;
        }

        .badge-replacement {
            color: white;
            background-color: #6ab04c;
        }

        .badge-default {
            color: white;
            background-color: #22a6b3;
        }

        .badge-blue {
            color: white;
            background-color: #3490dc;
        }

        .badge-red {
            color: white;
            background-color: #e3342f;
        }

        .badge-yellow {
            color: white;
            background-color: #f6993f;
        }

        .badge-gray {
            color: white;
            background-color: #718096;
        }

        .badge-green {
            color: white;
            background-color: #38c172;
        }

        .badge-orange {
            color: white;
            background-color: #f6ad55;
        }
    </style>
    <x-slot name="header">
        {{ __('Tickets') }}
    </x-slot>

    <div class="mb-4 flex justify-between shadow-md px-2 py-2 bg-white">
        <a class="rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-xs font-medium leading-5 text-white transition-colors duration-150 hover:bg-blue-900 focus:outline-none focus:ring active:bg-purple-600"
            href="{{ route('tickets.create') }}">
            {{ __('Create') }}
        </a>
        <div class="flex space-x-2 ">
            <select
                class="hidden block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50"
                name="status" id="status" onChange="window.location.href=this.value">
                <option value="{{ clearQueryString('status') }}">-- SELECT STATUS --</option>
                @foreach (\Coderflex\LaravelTicket\Enums\Status::cases() as $status)
                    <option value="{{ toggle('status', $status->value) }}" @selected($status->value == request('status'))>
                        {{ $status->name }}</option>
                @endforeach
            </select>

            <select
                class="block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50"
                name="priority" id="priority" onchange="window.location.href=this.value">
                <option value="{{ clearQueryString('priority') }}">-- SELECT PRIORITY --</option>
                @foreach (\Coderflex\LaravelTicket\Enums\Priority::cases() as $priority)
                    <option value="{{ toggle('priority', $priority->value) }}" @selected($priority->value == request('priority'))>
                        {{ $priority->name }}</option>
                @endforeach
            </select>

            <select
                class="block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50"
                name="category" id="category" onchange="window.location.href=this.value">
                <option value="{{ clearQueryString('category') }}">-- SELECT CATEGORY --</option>
                @foreach (\App\Models\Category::pluck('name', 'id') as $id => $name)
                    <option value="{{ toggle('category', (string) $id) }}" @selected($id == request('category'))>
                        {{ $name }}</option>
                @endforeach
            </select>
        </div>

    </div>

    <div class="rounded-lg bg-white p-4 shadow-md">

        <!-- Tab Navigation -->
        <div class="mb-4 flex justify-between">
            <!-- Navigation Links -->
            <div class="flex space-x-4">
                <a href="{{ route('tickets.index') }}" class="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md">All
                    Tickets</a>
                <a href="{{ route('tickets.index', ['status' => 'open']) }}"
                    class="py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white rounded-md">Open</a>
                <a href="{{ route('tickets.index', ['status' => 'closed']) }}"
                    class="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md">Closed</a>
                <a href="{{ route('tickets.index', ['status' => 'in_progress']) }}"
                    class="py-2 px-4 badge-yellow hover:bg-yellow-400 text-white rounded-md">In Progress</a>
                <a href="{{ route('tickets.index', ['status' => 'on_hold']) }}"
                    class="py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded-md">On Hold</a>
                <a href="{{ route('tickets.index', ['status' => 'resolved']) }}"
                    class="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md">Resolved</a>
            </div>

            <!-- Search Form -->
            <form action="{{ route('tickets.index') }}" method="GET" class="flex items-center">
                <input type="text" name="search" placeholder="Search tickets"
                    class="w-full p-2 border border-gray-300 rounded-md">
                <button class="px-4 py-2 mr-2 ml-2 bg-green-500 text-white rounded-md text-xs hover:bg-green-300"><a
                        href="/tickets">Reset</a></button>
                <button type="submit"
                    class="px-4 py-2 bg-green-500 text-white rounded-md text-xs hover:bg-green-300">Search</button>
            </form>
        </div>


        <!-- Ticket List -->
        <div class="w-full overflow-x-auto rounded-lg shadow-xs">
            <div class="w-full no-scrollbar">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            <th class="px-4 py-3">Ticket</th>
                            <th class="px-4 py-3">Title</th>
                            @hasanyrole('admin|agent')
                                <th class="px-4 py-3">Client</th>
                            @endhasanyrole
                            <th class="px-4 py-3">Status</th>
                            <th class="px-4 py-3">Serial Number</th>
                            <th class="px-4 py-3">Categories</th>
                            <th class="px-4 py-3">Labels</th>
                            @hasanyrole('admin|agent')
                                <th class="px-4 py-3">Latest Update</th>
                            @endhasanyrole
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y">
                        @forelse($tickets as $ticket)
                            <tr class="text-gray">
                                <td class="px-4 py-3 text-xs">#{{ $ticket->ticket_number }}</td>
                                <td class="px-4 py-3 text-xs">
                                    <a href="{{ route('tickets.show', $ticket) }}"
                                        class="hover:underline">{{ $ticket->title }}</a>
                                </td>
                                @hasanyrole('admin|agent')
                                    <td class="px-4 py-3 text-xs"><a
                                            href="clients/show/{{ $ticket->clients->id }}">{{ $ticket->clients->name . ' ' . $ticket->clients->lastname }}</a>
                                    </td>
                                @endhasanyrole
                                <td class="px-4 py-3 text-xs">
                                    @once
                                        @php
                                            function getStatusBadgeClass($status)
                                            {
                                                switch ($status) {
                                                    case 'open':
                                                        return 'badge-blue';
                                                    case 'closed':
                                                        return 'badge-red';
                                                    case 'in_progress':
                                                        return 'badge-yellow';
                                                    case 'on_hold':
                                                        return 'badge-gray';
                                                    case 'resolved':
                                                        return 'badge-green';
                                                    default:
                                                        return 'badge-orange';
                                                }
                                            }

                                            function getStatusLabel($status)
                                            {
                                                switch ($status) {
                                                    case 'open':
                                                        return 'Open';
                                                    case 'closed':
                                                        return 'Closed';
                                                    case 'in_progress':
                                                        return 'In Progress';
                                                    case 'on_hold':
                                                        return 'On Hold';
                                                    case 'resolved':
                                                        return 'Resolved';
                                                    default:
                                                        return $status;
                                                }
                                            }
                                        @endphp
                                    @endonce
                                    <div class="flex">
                                        <div class="badge {{ @getStatusBadgeClass($ticket->status) }}">
                                            {{ getStatusLabel($ticket->status) }}
                                        </div>
                                    </div>

                                </td>
                                <td class="px-4 py-3 text-xs">{{ $ticket->serial_number }}</td>
                                <td class="px-4 py-3 text-xs">
                                    <div class="flex">
                                        @foreach ($ticket->categories as $category)
                                            <div
                                                class="badge {{ $category->name == 'Technical' ? 'badge-technical' : 'badge-default' }}">
                                                {{ $category->name }}
                                            </div>
                                        @endforeach

                                    </div>
                                </td>
                                <td class="px-4 py-3 item-center mx-auto text-xs ">
                                    <div class="flex">
                                        @foreach ($ticket->labels as $label)
                                            <div
                                                class="badge {{ $label->name == 'System Issues' ? 'badge-red' : ($label->name == 'Replacement' ? 'badge-replacement' : 'badge-default') }}">
                                                {{ $label->name }}
                                            </div>
                                        @endforeach
                                    </div>

                                </td>
                                <td class="px-4 py-3 text-xs">
                                    <?php
                                    // Assuming $ticket is the model instance of Ticket
                                    
                                    // Get the latest message directly from the database
                                    $latestMessage = $ticket->messages()->latest()->first();
                                    
                                    // Check if there's any message
                                    if ($latestMessage) {
                                        // Output the updated_at value of the latest message
                                        echo date('d M Y', strtotime($latestMessage->updated_at));
                                    } else {
                                        // Handle case where there are no messages
                                        echo 'No comments available.';
                                    }
                                    ?>
                                </td>
                                <td class="px-4 py-3 space-x-2 text-center">
                                    @hasanyrole('admin|agent')
                                        <div style="display: flex; align-items: center;">
                                            <a class="px-5" href="{{ route('tickets.edit', $ticket) }}">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34">
                                                    </path>
                                                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                                                </svg>
                                            </a>
                                        @endhasanyrole
                                        @role('admin')
                                            <div>
                                                <form action="{{ route('tickets.destroy', $ticket) }}" method="POST"
                                                    onsubmit="return confirm('Are you sure?')"
                                                    style="display: inline-block;background-color:none !important;">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button style="background-color: transparent; border: none;">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                            height="14" viewBox="0 0 24 24" fill="none"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10"
                                                                y2="17"></line>
                                                            <line x1="14" y1="11" x2="14"
                                                                y2="17"></line>
                                                        </svg>
                                                    </button>
                                                </form>
                                            </div>
                                        @endrole
                                    </div>


                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td class="px-4 py-3" colspan="4">No tickets found.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            @if ($tickets->hasPages())
                <div
                    class="border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid-cols-9">
                    {{ $tickets->withQueryString()->links() }}
                </div>
            @endif
        </div>

    </div>

</x-app-layout>
