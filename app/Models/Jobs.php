<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    protected $table = 'jobs';
    protected $fillable = [
        'id',
        'client_id',
        'client_name',
        'job_stage',
        'address',
        'suburb',
        'state',
        'post_code',
        'installing',
        'stc_status',
        'stc',
        'installer',
        'stcf',
        'cesf',
        'created_at',
        'updated_at'


    ];

    use HasFactory;
}
