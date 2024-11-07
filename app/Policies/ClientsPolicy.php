<?php

namespace App\Policies;

use App\Models\Clients;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientsPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Clients $clients)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Clients $clients)
    {
       
            if ($user->hasRole('admin')) {
                return true;
            }
    
            if ($user->hasRole('agent') && $clients->assigned_to === $user->id) {
                return true;
            }
    
         
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Clients $clients)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Clients $clients)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Clients $clients)
    {
        //
    }
}
