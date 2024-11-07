<x-app-layout>
    <x-slot name="header">
        {{ __('Edit Client') }}
    </x-slot>

    <div class="rounded-lg bg-white p-4 shadow-md">

        <form action="{{ route('clients.update',$clients->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div>
                <x-input-label for="name" :value="__('Name')" />
                <x-text-input type="text"
                              id="name"
                              name="name"
                              class="block w-full"
                              value="{{ old('name', $clients->name) }}"
                              required />
                <x-input-error :messages="$errors->get('name')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="lastname" :value="__('Last Name')" />
                <x-text-input type="text"
                              id="lastname"
                              name="lastname"
                              class="block w-full"
                              value="{{ old('lastname', $clients->lastname) }}"
                                />
                <x-input-error :messages="$errors->get('lastname')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="phone" :value="__('Phone Number')" />
                <x-text-input type="text"
                              id="phone"
                              name="phone"
                              class="block w-full"
                              value="{{ old('phone', $clients->phone) }}"
                               />
                <x-input-error :messages="$errors->get('phone')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="email_address" :value="__('Email')" />
                <x-text-input type="email"
                              id="email"
                              name="email_address"
                              class="block w-full"
                              value="{{ old('email_address', $clients->email_address) }}"
                               />
                <x-input-error :messages="$errors->get('email_address')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="address" :value="__('Address')" />
                <x-text-input type="text"
                              id="address"
                              name="address"
                              class="block w-full"
                              value="{{ old('address', $clients->address) }}"
                               />
                <x-input-error :messages="$errors->get('address')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="suburb" :value="__('Suburb')" />
                <x-text-input type="text"
                              id="suburb"
                              name="suburb"
                              class="block w-full"
                              value="{{ old('suburb', $clients->suburb) }}"
                               />
                <x-input-error :messages="$errors->get('suburb')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="state" :value="__('State')" />
                <x-text-input type="text"
                              id="state"
                              name="state"
                              class="block w-full"
                              value="{{ old('state', $clients->state) }}"
                               />
                <x-input-error :messages="$errors->get('state')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="postcode" :value="__('Postcode')" />
                <x-text-input type="text"
                              id="postcode"
                              name="postcode"
                              class="block w-full"
                              value="{{ old('postcode', $clients->postcode) }}"
                               />
                <x-input-error :messages="$errors->get('postcode')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="componentry" :value="__('Componentry')" />
                <x-text-input type="text"
                              id="componentry"
                              name="componentry"
                              class="block w-full"
                              value="{{ old('componentry', $clients->componentry) }}"
                               />
                <x-input-error :messages="$errors->get('componentry')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="contract_date" :value="__('Contract Date')" />
                <x-text-input type="date"
                              id="contract_date"
                              name="contract_date"
                              class="block w-full"
                              value="{{ old('contract_date', $clients->contract_date) }}"
                               />
                <x-input-error :messages="$errors->get('contract_date')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="panels" :value="__('Panels')" />
                <x-text-input type="text"
                              id="panels"
                              name="panels"
                              class="block w-full"
                              value="{{ old('panels', $clients->panels) }}"
                               />
                <x-input-error :messages="$errors->get('panels')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="system_size" :value="__('System Size')" />
                <x-text-input type="text"
                              id="system_size"
                              name="system_size"
                              class="block w-full"
                              value="{{ old('system_size', $clients->system_size) }}"
                               />
                <x-input-error :messages="$errors->get('system_size')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="inverter" :value="__('Inverter')" />
                <x-text-input type="text"
                              id="inverter"
                              name="inverter"
                              class="block w-full"
                              value="{{ old('inverter', $clients->inverter) }}"
                               />
                <x-input-error :messages="$errors->get('inverter')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-primary-button>
                    {{ __('Submit') }}
                </x-primary-button>
            </div>
        </form>

    </div>
</x-app-layout>
