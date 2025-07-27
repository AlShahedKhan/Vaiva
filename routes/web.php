<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\Admin\AdminPageController;

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

// Service CRUD routes (Admin only)
Route::middleware(['auth', 'can:manage-services'])->group(function () {
    Route::get('/services', [App\Http\Controllers\ServiceController::class, 'index'])->name('services.index'); // List all services
    Route::get('/services/create', [App\Http\Controllers\ServiceController::class, 'create'])->name('services.create');
    Route::post('/services', [App\Http\Controllers\ServiceController::class, 'store'])->name('services.store');
    Route::get('/services/{service}/edit', [App\Http\Controllers\ServiceController::class, 'edit'])->name('services.edit');
    Route::put('/services/{service}', [App\Http\Controllers\ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/{service}', [App\Http\Controllers\ServiceController::class, 'destroy'])->name('services.destroy');
});

// Service listing with search/filter (public)
Route::get('/service-listing', [App\Http\Controllers\ServiceController::class, 'listing'])->name('services.listing');

// Admin panel for user and service management
Route::middleware(['auth', 'can:access-admin'])->group(function () {
    Route::get('/admin/users', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('admin.users.index');
    Route::get('/admin/services', [App\Http\Controllers\Admin\ServiceController::class, 'index'])->name('admin.services.index');
    Route::post('/users/{user}/approve', [UserController::class, 'approve'])->name('users.approve');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');


    // Add more admin management routes as needed
});

// Market Listing page
Route::get('/market-listing', function () {
    return Inertia::render('MarketListing');
})->name('market.listing');

// Integration List page
Route::get('/integration-list', function () {
    return Inertia::render('IntegrationList');
})->name('integration.list');

// Contact Us page
Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact.us');

// Flash message example (add this to controller after actions)
session()->flash('success', 'Action completed successfully!');

// Permission management (example middleware usage)
// Add 'can:permission-name' to routes as needed
