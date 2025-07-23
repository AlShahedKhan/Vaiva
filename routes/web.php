<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\OrderController;

use App\Http\Controllers\StripePaymentController;

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'title' => 'Welcome to Vaiva',
        'description' => 'Your platform for seamless connections and solutions.',
    ]);
});


Route::get('/explore-services', function () {
    return Inertia::render('Services', [
        'title' => 'Welcome to Vaiva',
        'description' => 'Your platform for seamless connections and solutions.',
    ]);
});
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('dashboard');
Route::get('/marketplace', function () {
    return Inertia::render('MarketPlace', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('marketplace');
Route::get('/list', function () {
    return Inertia::render('List', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('list');
Route::get('/table', function () {
    return Inertia::render('Table', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('table');
Route::get('/profile', function () {
    return Inertia::render('ProfileHeader', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('profileheader');

Route::get('/orders', [OrderController::class, 'index'])->name('orders.index')->middleware('auth');

// Payment routes
Route::get('/payment', [StripePaymentController::class, 'index'])
    ->middleware('auth')
    ->name('payment.form');

Route::post('/payment/process', [StripePaymentController::class, 'process'])
    ->middleware('auth')
    ->name('payment.process');

Route::get('/payment/success', function () {
    return Inertia::render('PaymentSuccess', [
        'user' => auth()->user()
    ]);
})->middleware('auth')->name('payment.success');

// API route for payment intents (if you need it later)
Route::post('/payment-intent', [StripePaymentController::class, 'createIntent'])
    ->middleware('auth');
