<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('client_id')->nullable();
            $table->string('client_name')->nullable();
            $table->string('job_stage')->nullable();
            $table->string('address')->nullable();
            $table->string('installing')->nullable();
            $table->string('stc_status')->nullable();
            $table->string('stc')->nullable();
            $table->string('installer')->nullable();
            $table->string('stcf')->nullable();
            $table->string('cesf')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
};
