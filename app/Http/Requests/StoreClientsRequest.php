<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClientsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
      
            return [
                'name' => ['nullable', 'string'],
                'lastname' => ['nullable', 'string'],
                'phone' => ['nullable', 'string'],
                'email_address' => ['nullable', 'string'],
                'address' => ['nullable', 'string'],
                'suburb' => ['nullable', 'string'],
                'state' => ['nullable', 'string'],
                'postcode' => ['nullable', 'string'],
                'componentry' => ['nullable', 'string'],
                'contract_date' => ['nullable', 'string'],
                'panels' => ['nullable', 'string'],
                'system_size' => ['nullable', 'string'],
                'inverter' => ['nullable', 'string'],
            
        ];
    }
}
