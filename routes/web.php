<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\Admin\AdminPageController;

use App\Http\Controllers\Frontend\SocialLoginController;

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


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [AdminPageController::class, 'dashboard'])->name('dashboard');
    Route::get('/admin', [AdminPageController::class, 'marketplace'])->name('admin');
    Route::get('/list', [AdminPageController::class, 'list'])->name('list');
    Route::get('/client', [AdminPageController::class, 'client'])->name('client');
    Route::get('/profile', [AdminPageController::class, 'profile'])->name('profileheader');
    Route::get('/payment', [AdminPageController::class, 'payment'])->name('payment');
    Route::post('/logout', [AdminPageController::class, 'logout'])->name('logout');
});

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


Route::get('login/google', [SocialLoginController::class, 'redirectToGoogle'])->name('login.google');
Route::get('user/google', [SocialLoginController::class, 'handleGoogleCallback']);
Route::get('login/facebook', [SocialLoginController::class, 'redirectTofacebook'])->name('login.facebook');
Route::get('user/facebook', [SocialLoginController::class, 'handlefacebookCallback']);
