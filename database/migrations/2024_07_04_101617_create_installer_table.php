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
        Schema::create('installer', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('business')->nullable();
            $table->string('location')->nullable();
            $table->string('state')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitute')->nullable();
            $table->integer('grid')->nullable();
            $table->integer('battery')->nullable();
            $table->integer('solar')->default('1');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('installer');
    }
};
