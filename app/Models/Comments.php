<?php

namespace App\Models;

use Spatie\Permission\Traits\HasRoles;
use Coderflex\LaravelTicket\Concerns\HasTickets;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Coderflex\LaravelTicket\Contracts\CanUseTickets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Comments extends Authenticatable implements CanUseTickets
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasTickets;
    use HasRoles;


  
    protected $table = 'messages';
    protected $fillable = [
        'message',
        'updated_at',
       
    ];
/*
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'uuid');
    }
    */
    
}


