<?php

use App\Http\Controllers\Auth\LoginController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', function () {
    return Inertia::render('Homepage', [
        'title' => 'Welcome to Vaiva',
        'description' => 'Your platform for seamless connections and solutions.',
    ]);
});

Route::get('/services', function () {
    // return Inertia::render('Serivces', [
    //     'title' => 'Services',
    //     'description' => 'Your platform for seamless connections and solutions.',
    // ]);
    return Inertia::render('Services', [
    'title' => 'Services',
    'description' => 'Your platform for seamless connections and solutions.',
]);
})->name('services');

Route::get('/how-it-works', function () {
    return Inertia::render('HowItWorks', [
        'title' => 'Welcome to Vaiva',
        'description' => 'Your platform for seamless connections and solutions.',
    ]);
});

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])
    ->name('register');

Route::post('/register', [RegisterController::class, 'register'])
    ->name('register.store');

// In your routes file (web.php)
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.submit');

Route::post('/logout', [LogoutController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');

// Add a simple dashboard route for after registration
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('dashboard');
