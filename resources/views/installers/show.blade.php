<x-app-layout>


       <!-- Profile Page -->
    <div class="mb-4 flex justify-between hidden">
        <a class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600" href="/clients/{{$client->id}}/edit">
          EDIT
        </a>
    </div>

    <div class="w-full mx-auto mt-6 ">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
                <h1 class="text-xl font-semibold mb-2">Client Profile</h1>
                <hr class="mb-4">
                <!-- Profile Information -->
                <div>
                    <form id="clientForm" action="{{ route('clients.update', $client) }}" method="POST">
                        @csrf
                        @method('PATCH')
    
                        <!-- Name -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Name:</div>
                            <div id="name" onclick="makeEditable('name')">{{ $client->name }}</div>
                            <input type="text" name="name" id="nameInput" class="hidden" value="{{ $client->name }}">
                        </div>
    
                        <!-- Last Name -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Last Name:</div>
                            <div id="lastname" onclick="makeEditable('lastname')">{{ $client->lastname }}</div>
                            <input type="text" name="lastname" id="lastnameInput" class="hidden" value="{{ $client->lastname }}">
                        </div>
    
                        <!-- Phone Number -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Phone Number:</div>
                            <div id="phone" onclick="makeEditable('phone')">{{ $client->phone }}</div>
                            <input type="text" name="phone" id="phoneInput" class="hidden" value="{{ $client->phone }}">
                        </div>
    
                        <!-- Email Address -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Email:</div>
                            @if ($client->email_address==NULL)
                                <div id="email_address" onclick="makeEditable('email_address')"><i>No Email Address</i></div>
                                <input type="text" name="email_address" id="email_addressInput" class="hidden" value="No Email Address">
                            @else
                                <div id="email_address" onclick="makeEditable('email_address')">{{ $client->email_address }}</div>
                                <input type="text" name="email_address" id="email_addressInput" class="hidden" value="{{ $client->email_address }}">
                            @endif
                        </div>
    
                        <!-- Address -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Address:</div>
                            <div id="address" onclick="makeEditable('address')">{{ $client->address }}</div>
                            <input type="text" name="address" id="addressInput" class="hidden" value="{{ $client->address }}">
                        </div>
    
                        <!-- Suburb -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Suburb:</div>
                            <div id="suburb" onclick="makeEditable('suburb')">{{ $client->suburb }}</div>
                            <input type="text" name="suburb" id="suburbInput" class="hidden" value="{{ $client->suburb }}">
                        </div>
    
                        <!-- State -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">State:</div>
                            <div id="state" onclick="makeEditable('state')">{{ $client->state }}</div>
                            <input type="text" name="state" id="stateInput" class="hidden" value="{{ $client->state }}">
                        </div>
    
                        <!-- Postcode -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Postcode:</div>
                            <div id="postcode" onclick="makeEditable('postcode')">{{ $client->postcode }}</div>
                            <input type="text" name="postcode" id="postcodeInput" class="hidden" value="{{ $client->postcode }}">
                        </div>
    
                        <!-- Componentry -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Componentry:</div>
                            <div id="componentry" onclick="makeEditable('componentry')">{{ $client->componentry }}</div>
                            <input type="text" name="componentry" id="componentryInput" class="hidden" value="{{ $client->componentry }}">
                        </div>
    
                        <!-- Contract Date -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Contract Date:</div>
                            <div id="contract_date" onclick="makeEditable('contract_date')">{{ $client->contract_date }}</div>
                            <input type="date" name="contract_date" id="contract_dateInput" class="hidden" value="{{ $client->contract_date }}">
                        </div>
    
                        <!-- Panels -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Panels:</div>
                            <div id="panels" onclick="makeEditable('panels')">{{ $client->panels }}</div>
                            <input type="text" name="panels" id="panelsInput" class="hidden" value="{{ $client->panels }}">
                        </div>
    
                        <!-- System Size -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">System Size:</div>
                            <div id="system_size" onclick="makeEditable('system_size')">{{ $client->system_size }}</div>
                            <input type="text" name="system_size" id="system_sizeInput" class="hidden" value="{{ $client->system_size }}">
                        </div>
    
                        <!-- Inverter -->
                        <div class="flex items-center mb-2">
                            <div class="w-40 font-semibold">Inverter:</div>
                            <div id="inverter" onclick="makeEditable('inverter')">{{ $client->inverter }}</div>
                            <input type="text" name="inverter" id="inverterInput" class="hidden" value="{{ $client->inverter }}">
                        </div>
    
                        <!-- Submit Button (Hidden) -->
                        <button type="submit" id="submitButton" class="hidden"></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

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
                    // Submit form when Enter key is pressed
                    event.preventDefault(); // Prevent default form submission
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
                    // Update the displayed client information if the update was successful
                    document.getElementById('name').innerText = data.client.name;
                    document.getElementById('lastname').innerText = data.client.lastname;
                    // Update other fields similarly
                } else {
                    // Handle any errors here
                    console.error('Error:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        }
    </script>



    </div>
</div>


</x-app-layout>
