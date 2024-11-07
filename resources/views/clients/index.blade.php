<x-app-layout>
    <style>
        /* CSS for changing background color on hover */
        tbody tr:hover td {
            background-color: #f0f0f0; /* Adjust the color as needed */
        }
    </style>

    <x-slot name="header">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
            {{ __('Clients') }}
        </h2>
    </x-slot>

    <div class="mb-4 flex justify-between shadow-md px-4 py-2 bg-white rounded-lg">
        <a class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-xs font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-900 focus:outline-none focus:ring active:bg-purple-600" href="{{ route('clients.create') }}">
            {{ __('Create') }}
        </a>
    </div>

    <div class="rounded-lg bg-white p-4 shadow-md">
        <!-- Search Form -->
        <form action="{{ route('clients.search') }}" method="GET" class="flex justify-between mb-4 px-2 py-2">
            <input type="text" name="query" id="searchInput" placeholder="Search..." class="w-full p-2 border border-gray-300 rounded-md">
            <button class="px-4 py-2 ml-3 mr-3 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-300">
                <a href="/clients">Reset</a>
            </button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-300">Search</button>
        </form>

        <!-- Client List -->
        <div class="w-full overflow-x-auto rounded-lg shadow-xs">
            <table class="w-full whitespace-no-wrap">
                <thead>
                    <tr class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3">Address</th>
                        <th class="px-4 py-3">Email</th>
                        <th class="px-4 py-3">Contact Number</th>
                        <th class="px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody id="tableBody" class="bg-white divide-y">
                    <!-- Render table rows dynamically -->
                    @foreach($clients as $client)
                        <tr class="text-gray-700">
                            <td class="px-4 py-3 text-sm">
                                <a href="../clients/show/{{$client->id}}" class="hover:underline">{{ $client->name.' '.$client->lastname }}</a>
                            </td>
                            <td class="px-4 py-3 text-sm">{{ $client->address.','.$client->suburb.','.$client->state.' '.$client->postcode }}</td>
                            <td class="px-4 py-3 text-sm">{{ $client->email_address }}</td>
                            <td class="px-4 py-3 text-sm">{{ $client->phone }}</td>
                            <td class="px-4 py-3 space-x-2 text-center">
                                <a href="{{ route('clients.edit', $client->id) }}" class="inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                                        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                                    </svg>
                                </a>
                                <form action="{{ route('clients.destroy', $client->id) }}" method="POST" onsubmit="return confirm('Are you sure?')" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button style="background-color: transparent; border: none;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            @if($clients->hasPages())
                <div class="border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {{ $clients->links() }}
                </div>
            @endif
        </div>
    </div>

    <script>
        function searchDatabase() {
            var query = $('#searchInput').val();
        
            $.ajax({
                type: 'GET',
                url: '{{ route("clients.search") }}',
                data: { query: query },
                success: function(response) {
                    $('#tableBody').html(response);
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        }
    </script>
</x-app-layout>
