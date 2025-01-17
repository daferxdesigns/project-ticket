<x-app-layout>
    <x-slot name="header">
        {{ __('Status') }}
    </x-slot>

    <div class="flex mb-4">
        <a class="px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600" href="{{ route('labels.create') }}">
            {{ __('Create') }}
        </a>
    </div>

    <div class="p-4 bg-white rounded-lg shadow-xs">

        <div class="w-full mb-8 overflow-hidden border rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
                @forelse($stats as $ticket)
                <div>
                    <!-- Your code to display each ticket -->
                    <!-- Example: -->
                    <p>Ticket ID: {{ $ticket->id }}</p>
                    <p>Ticket Name: {{ $ticket->name }}</p>
                </div>
            @empty
                <p>No tickets found.</p>
            @endforelse
            

            </div>

         
        </div>

    </div>
</x-app-layout>
