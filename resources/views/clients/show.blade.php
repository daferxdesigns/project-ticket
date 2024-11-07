<x-app-layout>
    <div class="max-w-4xl mx-auto px-4 py-8">

        <!-- Edit Button -->
        <div class="mb-4 flex justify-end">
            <a href="/clients/{{$client->id}}/edit" class="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple-600">
                Edit
            </a>
        </div>

        <!-- Profile Card -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <!-- Profile Photo and Details -->
            <div class="p-4 flex items-center">
                <div class="mr-4">
                    <img src="https://via.placeholder.com/150" alt="Profile Photo" class="w-24 h-24 rounded-full">
                </div>
                <div>
                    <h1 class="text-2xl font-semibold">{{ $client->name }} {{ $client->lastname }}</h1>
                    <p class="text-gray-600">{{ $client->email_address }}</p>
                    <p class="text-gray-600">{{ $client->phone }}</p>
                    <p class="text-gray-600">{{ $client->address }}, {{ $client->suburb }}, {{ $client->state }}, {{ $client->postcode }}</p>
                </div>
            </div>

            <hr class="my-6">

            <!-- Profile Information Form -->
            <form id="clientForm" action="{{ route('clients.update', $client) }}" method="POST">
                @csrf
                @method('PATCH')

                <!-- Individual Fields -->
                <div class="p-4">
                    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">

                        <!-- Name -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Name:</div>
                            <div id="name" class="editable-field" onclick="makeEditable('name')">{{ $client->name }}</div>
                            <input type="text" name="name" id="nameInput" class="hidden" value="{{ $client->name }}">
                        </div>

                        <!-- Last Name -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Last Name:</div>
                            <div id="lastname" class="editable-field" onclick="makeEditable('lastname')">{{ $client->lastname }}</div>
                            <input type="text" name="lastname" id="lastnameInput" class="hidden" value="{{ $client->lastname }}">
                        </div>

                        <!-- Phone Number -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Phone Number:</div>
                            <div id="phone" class="editable-field" onclick="makeEditable('phone')">{{ $client->phone }}</div>
                            <input type="text" name="phone" id="phoneInput" class="hidden" value="{{ $client->phone }}">
                        </div>

                        <!-- Email Address -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Email:</div>
                            <div id="email_address" class="editable-field" onclick="makeEditable('email_address')">
                                @if ($client->email_address == NULL)
                                    <i>No Email Address</i>
                                @else
                                    {{ $client->email_address }}
                                @endif
                            </div>
                            <input type="text" name="email_address" id="email_addressInput" class="hidden" value="{{ $client->email_address ?? 'No Email Address' }}">
                        </div>

                        <!-- Address -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Address:</div>
                            <div id="address" class="editable-field" onclick="makeEditable('address')">{{ $client->address }}</div>
                            <input type="text" name="address" id="addressInput" class="hidden" value="{{ $client->address }}">
                        </div>

                        <!-- Suburb -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Suburb:</div>
                            <div id="suburb" class="editable-field" onclick="makeEditable('suburb')">{{ $client->suburb }}</div>
                            <input type="text" name="suburb" id="suburbInput" class="hidden" value="{{ $client->suburb }}">
                        </div>

                        <!-- State -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">State:</div>
                            <div id="state" class="editable-field" onclick="makeEditable('state')">{{ $client->state }}</div>
                            <input type="text" name="state" id="stateInput" class="hidden" value="{{ $client->state }}">
                        </div>

                        <!-- Postcode -->
                        <div class="flex items-center">
                            <div class="w-36 font-semibold">Postcode:</div>
                            <div id="postcode" class="editable-field" onclick="makeEditable('postcode')">{{ $client->postcode }}</div>
                            <input type="text" name="postcode" id="postcodeInput" class="hidden" value="{{ $client->postcode }}">
                        </div>

                    </div>
                    <!-- End of Grid -->

                    <!-- Hidden Submit Button -->
                    <button type="submit" id="submitButton" class="hidden"></button>
                </div>
                <!-- End of Form -->
            </form>
        </div>
        <!-- End of Profile Card -->

    </div>
    <!-- End of Container -->

    <!-- Script for Editing Fields -->
    <script>
        function makeEditable(fieldName) {
            var field = document.getElementById(fieldName);
            field.classList.add('hidden');
            var inputField = document.getElementById(fieldName + 'Input');
            inputField.classList.remove('hidden');
            inputField.focus();
            inputField.addEventListener('blur', function() {
                field.innerText = inputField.value;
                inputField.classList.add('hidden');
                field.classList.remove('hidden');
                submitForm();
            });
            inputField.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    field.innerText = inputField.value;
                    inputField.classList.add('hidden');
                    field.classList.remove('hidden');
                    submitForm();
                }
            });
        }

        function submitForm() {
            var formData = new FormData(document.getElementById('clientForm'));

            fetch(document.getElementById('clientForm').action, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Update displayed client information on success
                    updateField('name', data.client.name);
                    updateField('lastname', data.client.lastname);
                    updateField('phone', data.client.phone);
                    updateField('email_address', data.client.email_address);
                    updateField('address', data.client.address);
                    updateField('suburb', data.client.suburb);
                    updateField('state', data.client.state);
                    updateField('postcode', data.client.postcode);
                } else {
                    console.error('Error:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        }

        // Function to update a specific field value
        function updateField(fieldName, value) {
            document.getElementById(fieldName).innerText = value;
        }
    </script>
    <!-- End of Script -->
</x-app-layout>
