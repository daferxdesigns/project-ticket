<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LabelController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\InstallersController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DownloadAttachmentController;
use App\Http\Controllers\JobsController;

Route::get('/', function () {
    return redirect()->route('login');
});


require __DIR__ . '/auth.php';

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->middleware(['role:admin|agent'])->name('dashboard');

    Route::get('profile', [ProfileController::class, 'show'])->name('profile.show');
    Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::post('tickets/upload', [TicketController::class, 'upload'])->name('tickets.upload');
    Route::patch('tickets/{ticket}/close', [TicketController::class, 'close'])->name('tickets.close');
    Route::patch('tickets/{ticket}/reopen', [TicketController::class, 'reopen'])->name('tickets.reopen');
    Route::patch('tickets/{ticket}/archive', [TicketController::class, 'archive'])->name('tickets.archive');
    Route::patch('/tickets/{ticket}/update-status', [TicketController::class, 'updateStatus'])
        ->name('tickets.updateStatus');
    Route::resource('tickets', TicketController::class);

    Route::get('jobs', [JobsController::class, 'index'])->name('jobs.index');
    Route::get('/jobs/search', [JobsController::class, 'search'])->name('jobs.search');


    Route::get('clients', [ClientsController::class, 'index'])->name('clients.index');
    Route::get('clients/show/{client_id}', [ClientsController::class, 'show'])->name('clients.shows');
    Route::get('/clients/create', [ClientsController::class, 'create'])->name('clients.create');
    Route::put('clients/update/{client_id}', [ClientsController::class, 'update'])->name('clients.update');
    Route::delete('clients/delete/{client_id}', [ClientsController::class, 'destroy'])->name('clients.destroy');
    Route::get('/clients/search', [ClientsController::class, 'search'])->name('clients.search');
    Route::resource('clients', ClientsController::class);

    Route::get('installers', [InstallersController::class, 'index'])->name('installers.index');
    Route::get('installers/show/{installer_id}', [InstallersController::class, 'show'])->name('installers.shows');
    Route::get('/installers/create', [InstallersController::class, 'create'])->name('installers.create');
    Route::put('installers/update/{installer_id}', [InstallersController::class, 'update'])->name('installers.update');
    Route::delete('installers/delete/{installer_id}', [InstallersController::class, 'destroy'])->name('installers.destroy');
    Route::get('/installers/search', [InstallersController::class, 'search'])->name('installers.search');
    Route::resource('installers', InstallersController::class);

    Route::get('status', [StatusController::class, 'index'])->name('status.index');

    Route::middleware('role:admin')->group(function () {
        Route::resource('users', UserController::class)->except('show');
        Route::get('activities', ActivityController::class)->name('activities');
        Route::resource('categories', CategoryController::class)->middleware('role:admin');
        Route::resource('labels', LabelController::class)->middleware('role:admin');
    });

    Route::post('messages/{ticket}', [MessageController::class, 'store'])->name('message.store');

    Route::get('download/attachment/{mediaItem}', DownloadAttachmentController::class)->name('attachment-download');
});
