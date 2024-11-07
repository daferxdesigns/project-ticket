<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Spatie\Activitylog\LogOptions;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Coderflex\LaravelTicket\Concerns\HasTickets;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Coderflex\LaravelTicket\Contracts\CanUseTickets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Clients as Authenticatable;

class Clients extends Model
{
    use HasFactory, Notifiable;


  
    protected $table = 'clients';
    protected $fillable = [
        'user_id',
        'name',
        'lastname',
        'phone',
        'email_address' ,
        'address',
        'suburb',
        'state',
        'postcode',
        'componentry',
        'contract_date',
        'panels',
        'system_size',
        'inverter'
       
    ];

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'uuid');
    }

   
}


