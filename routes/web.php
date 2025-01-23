<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Ruta para el dashboard, con middleware de autenticación
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Grupo de rutas que requieren autenticación
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/agenda', function () {
        return Inertia::render('agenda/page');
    })->name('agenda');

    Route::get('/turnos', function () {
        return Inertia::render('turnos/page');
    })->name('turnos');

    Route::get('/pacientes', function () {
        return Inertia::render('Pacientes/Page');
    })->name('pacientes');

    Route::get('/obra-social', function () {
        return Inertia::render('ObraSocial/Page');
    })->name('obra-social');

    Route::get('/especialidades', function () {
        return Inertia::render('Especialidades/Page');
    })->name('especialidades');

    Route::get('/configuracion', function () {
        return Inertia::render('Configuracion/Page');
    })->name('configuracion');
});

// Requerir el archivo de autenticación
require __DIR__.'/auth.php';
require __DIR__.'/calendar.php';
