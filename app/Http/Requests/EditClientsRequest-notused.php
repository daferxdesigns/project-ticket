<?php


namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;

class EditClientsRequest extends FormRequest
{
    public function rules(): array
    {

        
        return [
            'name'  => ['nullable', 'string'],
            'lastname'  => ['nullable', 'string'],
            'phone'       => ['nullable', 'string'],
            'email_address'     => ['nullable', 'string'],
            'address'  => ['nullable', 'string'],
            'suburb'  => ['nullable', 'string'],
            'state'  => ['nullable', 'string'],
            'postcode'  => ['nullable', 'string'],
            'componentry'  => ['nullable', 'string'],
            'contract_date'  => ['nullable', 'string'],
            'panels'  => ['nullable', 'string'],
            'system_size'  => ['nullable', 'string'],
            'inverter'  => ['nullable', 'string'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

   
}