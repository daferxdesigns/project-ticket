<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateClientsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['nullable', 'string', 'max:255'],
            'lastname' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'email_address' => ['nullable', 'email', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'suburb' => ['nullable', 'string', 'max:255'],
            'state' => ['nullable', 'string', 'max:255'],
            'postcode' => ['nullable', 'string', 'max:255'],
            'componentry' => ['nullable', 'string', 'max:255'],
            'contract_date' => ['nullable', 'date'],
            'panels' => ['nullable', 'string', 'max:255'],
            'system_size' => ['nullable', 'string', 'max:255'],
            'inverter' => ['nullable', 'string', 'max:255'],
        ];
    }
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        if ($this->password == null) {
            $this->request->remove('password');
        }
    }

}
