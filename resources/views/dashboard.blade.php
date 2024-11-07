<x-app-layout>
    <x-slot name="header">
        {{ __('Dashboard') }}
    </x-slot>


    <div class="mb-8 grid gap-3 md:grid-cols-4 xl:grid-cols-2"> <!-- start pie and ticket contrainer -->
        <!-- Total Tickets Card -->

        <div class="flex-col flex items-center rounded-lg bg-white shadow-sm">
            <div class=" p-2">
                <div class="mr-1 h-full rounded-full">
                    <canvas id="ticketPieChart" class="w-full" height="400"></canvas>
                </div>
            </div>
        </div>
        <div class="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-2"> <!-- start ticket container -->
            <div class="flex items-center rounded-lg bg-white shadow-sm">
                <a href="{{ route('tickets.index') }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-orange-100 p-3 text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Total tickets
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $totalTickets }}
                        </p>
                    </div>
                </a>
            </div>

            <!-- Opened Tickets Card -->
            <div class="flex items-center rounded-lg bg-white shadow-sm">
                <a href="{{ route('tickets.index', ['status' => 'open']) }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-blue-100 p-3 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Open tickets
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $openTickets }}
                        </p>
                    </div>
                </a>
            </div>

            <!-- Opened Tickets Card -->
            <div class="flex items-center rounded-lg bg-white shadow-sm">
                <a href="{{ route('tickets.index', ['status' => 'resolved']) }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-green-100 p-3 text-green-500">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                        </svg>
                        
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Resolved tickets
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $resolvedTickets }}
                        </p>
                    </div>
                </a>
            </div>

            <!-- Closed Tickets Card -->
            <div class="flex items-center rounded-lg bg-white shadow-sm">
                <a href="{{ route('tickets.index', ['status' => 'closed']) }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-red-300 p-3 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Closed tickets
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $closedTickets }}
                        </p>
                    </div>
                </a>
            </div>

            <!-- On-Hold Tickets Card -->
            <div class="flex items-center rounded-lg bg-white shadow-sm">
                <a href="{{ route('tickets.index', ['status' => 'closed']) }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-gray-200 p-3 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            On Hold tickets
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $onholdTickets }}
                        </p>
                    </div>
                </a>
            </div>

            <!-- In Progress Tickets Card -->
            <div class="flex items-center rounded-lg bg-white shadow-sm">
                <a href="{{ route('tickets.index', ['status' => 'closed']) }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-yellow-300 p-3 text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        
                        
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            In Progress tickets
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $inprogressTickets }}
                        </p>
                    </div>
                </a>
            </div>
        </div><!-- end ticket container -->

        <div class="mb-8 grid gap-6 md:grid-cols-1 xl:grid-cols-2"> <!-- start Management container -->
            <div class="flex items-center rounded-lg bg-white shadow-sm h-[116px]">
                <a href="{{ route('clients.index') }}" class="block flex w-full p-4">
                    <div class="mr-4 h-full rounded-full bg-red-100 p-3 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                          </svg>
                          
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Total Clients
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            {{ $totalClients }}
                        </p>
                    </div>
                </a>
        </div>

    </div> <!-- end pie and ticket contrainer -->


 

    
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var ctx = document.getElementById('ticketPieChart').getContext('2d');
            var ticketPieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Open', 'Resolved', 'Closed', 'On Hold', 'In Progress'],
                    datasets: [{
                        label: 'Tickets',
                        data: [
                            {{ $openTickets }},
                            {{ $resolvedTickets }},
                            {{ $closedTickets }},
                            {{ $onholdTickets }},
                            {{ $inprogressTickets }}
                        ],
                        backgroundColor: [
                            '#3498db',
                            '#2ecc71',
                            '#e74c3c',
                            '#ecf0f1',
                            '#f1c40f'
                        ],
                        borderColor: [
                            '#2980b9',
                            '#27ae60',
                            '#c0392b',
                            '#bdc3c7',
                            '#f39c12'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Ticket Status Distribution'
                        }
                    }
                }
            });
        });
        </script>
    
</x-app-layout>
