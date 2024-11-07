<x-app-layout>
    <x-slot name="header">
        {{ __('Edit ticket') }}
    </x-slot>

    <div class="rounded-lg bg-white p-4 shadow-md">

        <form action="{{ route('tickets.update', $ticket) }}" method="POST">
            @csrf
            @method('PATCH')

            <div>
                <x-input-label for="title" :value="__('Title')" />
                <x-text-input type="text"
                              id="title"
                              name="title"
                              class="block w-full"
                              value="{{ old('title', $ticket->title) }}"
                              required />
                <x-input-error :messages="$errors->get('title')" class="mt-2" />
            </div>

            <div>
                <x-input-label for="serial_number" :value="__('Serial Number')" />
                <x-text-input type="text"
                              id="serial_number"
                              name="serial_number"
                              class="block w-full"
                              value="{{ old('serial_number',$ticket->serial_number) }}"
                               />
                <x-input-error :messages="$errors->get('serial_number')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="message" :value="__('Message')" />
                <textarea id="message"
                          name="message"
                          class="mt-1 block h-32 w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50"
                          required>{{ old('message', $ticket->message) }}</textarea>
                <x-input-error :messages="$errors->get('message')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="the_client" :value="__('Client')" />
                <select name="the_client" id="the_client" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50">
                @foreach($clients as $id => $name)
                        <option value="{{ $id }}" {{ (old('the_client') ? old('the_client') == $id : ($ticket->the_client == $id ?? false)) ? 'selected' : '' }}>{{ $name }}</option>
                    @endforeach
                </select>
                <x-input-error :messages="$errors->get('the_client')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="labels" :value="__('Labels')" />
                    @foreach($labels as $id => $name)
                        <div class="mt-1 inline-flex space-x-1">
                            <input class="text-purple-600 form-checkbox focus:shadow-outline-purple focus:border-purple-400 focus:outline-none"
                                   type="checkbox" name="labels[]" id="label-{{ $id }}" value="{{ $id }}"
                                    @checked(old('labels') ? in_array($id, old('labels', [])) : $ticket->labels->contains($id))>
                            <x-input-label for="label-{{ $id }}">{{ $name }}</x-input-label>
                        </div>
                    @endforeach
                <x-input-error :messages="$errors->get('labels')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="categories" :value="__('Categories')" />
                    @foreach($categories as $id => $name)
                        <div class="mt-1 inline-flex space-x-1">
                            <input class="text-purple-600 form-checkbox focus:shadow-outline-purple focus:border-purple-400 focus:outline-none"
                                   type="checkbox" name="categories[]" id="category-{{ $id }}" value="{{ $id }}"
                                    @checked(old('categories') ? in_array($id, old('categories', [])) : $ticket->categories->contains($id))>
                            <x-input-label for="category-{{ $id }}">{{ $name }}</x-input-label>
                        </div>
                    @endforeach
                <x-input-error :messages="$errors->get('categories')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="priority" :value="__('Priority')" />
                <select name="priority" id="priority" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50">
                    @foreach(\Coderflex\LaravelTicket\Enums\Priority::cases() as $priority)
                        <option value="{{ $priority->value }}" @selected(old('priority', $ticket->priority) == $priority->value)>{{ $priority->name }}</option>
                    @endforeach
                </select>
                <x-input-error :messages="$errors->get('priority')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="status" :value="__('Status')" />
                <select name="status" id="status" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50">
                    @foreach(\Coderflex\LaravelTicket\Enums\Status::cases() as $status)
                        <option value="{{ $status->value }}" @selected(old('status', $ticket->status) == $status->value)>{{ $status->name }}</option>
                    @endforeach
                </select>
                <x-input-error :messages="$errors->get('status')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="assigned_to" :value="__('Assign to')" />
                <select name="assigned_to" id="assigned_to" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-within:text-primary-600 focus:border-primary-300 focus:ring-primary-200 focus:ring focus:ring-opacity-50">
                    <option value="">-- SELECT USER --</option>
                    @foreach($users as $id => $name)
                        <option value="{{ $id }}" @selected(old('assigned_to', $ticket->assigned_to) == $id)>{{ $name }}</option>
                    @endforeach
                </select>
                <x-input-error :messages="$errors->get('assigned_to')" class="mt-2" />
            </div>

            <div class="mt-4">
                <input type="file" name="attachments[]" multiple>
                <x-input-error :messages="$errors->get('attachments')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-primary-button>
                    {{ __('Submit') }}
                </x-primary-button>
            </div>
        </form>

    </div>
</x-app-layout>
