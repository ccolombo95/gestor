<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CalendarController;

 Route::middleware('auth')->group(function () {
    Route::get('/calendar', [CalendarController::class, 'index'])
        ->name('calendar.index');

    Route::post('/calendar', [CalendarController::class, 'store'])
        ->name('calendar.store');

    Route::put('/calendar/{id}', [CalendarController::class, 'update'])
        ->name('calendar.update');

    Route::delete('/calendar/{id}', [CalendarController::class, 'destroy'])
        ->name('calendar.destroy');
    


 });


