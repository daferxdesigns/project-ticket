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

class Installers extends Model
{
    use HasFactory, Notifiable;



    protected $table = 'installers';
    protected $fillable = [
        'name',
        'lastname',
        'cec_number',
        'electrical_contractor_number',
        'address',
        'suburb',
        'postcode',
        'state',
        'contact_number',
        'email',
        'company',
        'certificate_of_currency',
        'expiry_date',
        'area',
        'forklift',
        'note'

    ];

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'uuid');
    }
}
