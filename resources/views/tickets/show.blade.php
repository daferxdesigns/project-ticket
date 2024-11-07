<x-app-layout>
    <x-slot name="header">
        <div class="border-b border-gray-500 pb-2">
            <h2 class="text-xl font-semibold">[ Ticket #{{ $ticket->ticket_number }} ] - {{ $ticket->title }}</h2>
            <p class="text-sm text-gray-600">{{ $ticket->serial_number }}</p>
        </div>
    </x-slot>

    @hasanyrole('admin|agent')
        <div class="flex justify-between items-center mt-4">
            <div>
                <a class="px-5" href="{{ route('tickets.edit', $ticket) }}">
                    <x-primary-button>Edit Ticket</x-primary-button>
                </a>
                <a href="../clients/show/{{ $ticket->clients->id }}">
                    <x-primary-button>Edit Client Info</x-primary-button>
                </a>
            </div>
            <div>
                <form id="status-form" action="{{ route('tickets.updateStatus', $ticket) }}" method="POST">
                    @csrf
                    @method('PATCH')
                    <select name="status" id="status"
                        class="rounded-md border-gray-300 shadow-sm focus:ring-primary-200 focus:ring-opacity-50 focus:border-primary-300">
                        <option value="open" {{ $ticket->status == 'open' ? 'selected' : '' }}>Open</option>
                        <option value="in_progress" {{ $ticket->status == 'in_progress' ? 'selected' : '' }}>In Progress
                        </option>
                        <option value="resolved" {{ $ticket->status == 'resolved' ? 'selected' : '' }}>Resolved</option>
                        <option value="on_hold" {{ $ticket->status == 'on_hold' ? 'selected' : '' }}>On Hold</option>
                        <option value="closed" {{ $ticket->status == 'closed' ? 'selected' : '' }}>Closed</option>
                    </select>
                </form>
            </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div class="bg-white p-4 shadow-sm rounded-lg">
                <h3 class="text-lg font-semibold text-gray-700 mb-4">Client Details</h3>
                <p class="text-gray-600">{{ $ticket->clients->name }} {{ $ticket->clients->lastname }}</p>
                <p class="text-gray-600"><strong>Address:</strong> {{ $ticket->clients->address }}
                    {{ $ticket->clients->suburb }} {{ $ticket->clients->state }} {{ $ticket->clients->postcode }}</p>
                <p class="text-gray-600"><strong>Email:</strong> {{ $ticket->clients->email_address }}</p>
                <p class="text-gray-600"><strong>PH:</strong> 0{{ $ticket->clients->phone }}</p>
                <h3 class="text-lg font-semibold text-gray-700 mt-4 mb-2">System Details</h3>
                <p class="text-gray-600">{{ $ticket->clients->system_size }} - {{ $ticket->clients->componentry }}</p>
            </div>
        @endhasanyrole
        <div class="bg-white p-4 shadow-sm rounded-lg">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Issue Reported</h3>
            <p class="text-gray-600">{{ $ticket->message }}</p>
        </div>
    </div>

    @if ($ticket->getMedia('tickets_attachments')->count())
        <div class="mt-6 bg-white p-4 shadow-sm rounded-lg">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Attachments</h3>
            @foreach ($ticket->getMedia('tickets_attachments') as $media)
                <p>
                    <a href="{{ route('attachment-download', $media) }}"
                        class="hover:underline">{{ $media->file_name }}</a>
                </p>
            @endforeach
        </div>
    @endif

    <div class="mt-6 bg-white p-4 shadow-sm rounded-lg">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Messages</h3>
        @if (!$ticket->isArchived())
            <form action="{{ route('message.store', $ticket) }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label for="message" class="font-semibold mb-1 block">Your Message:</label>
                    <textarea id="message" name="message"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-200 focus:border-primary-300 focus:ring-opacity-50"
                        required>{{ old('message') }}</textarea>
                    <x-input-error :messages="$errors->get('message')" class="mt-2" />
                </div>
                <div class="flex justify-end">
                    <x-primary-button>Submit</x-primary-button>
                </div>
            </form>
        @endif

        @forelse($ticket->messages as $message)
            <div class="mt-4 bg-gray-50 p-3 rounded-lg">
                <p>{!! $message->message !!}</p>
                <div class="flex justify-between text-sm text-gray-500">
                    <span>{{ $message->user_id }}</span>
                    <span>{{ $message->created_at->format('D-d M Y') }}</span>
                </div>
            </div>
        @empty
            <p class="text-gray-600 mt-4">No messages found.</p>
        @endforelse
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var form = document.getElementById('status-form');
            var statusSelect = document.getElementById('status');

            form.addEventListener('change', function() {
                var formData = new FormData(form);

                fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')
                                .getAttribute('content')
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Update UI or handle response as needed
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        });
    </script>
</x-app-layout>
