<?php

namespace App\Http\Controllers\Admin; // Correct namespace for Admin folder

use App\Http\Controllers\Controller; // Don't forget to import the base Controller
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth; // Make sure to import Auth

class AdminPageController extends Controller
{
    /**
     * Apply 'auth' middleware to all methods in this controller.
     */
    /**
     * Render the Dashboard page.
     */
    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'user' => Auth::user(), // Passing the authenticated user
        ]);
    }

    /**
     * Render the Marketplace page.
     */
    public function marketplace()
    {
        return Inertia::render('MarketPlace', [
            'user' => Auth::user(), // Passing the authenticated user
        ]);
    }

    /**
     * Render the List page.
     */
    public function list()
    {
        return Inertia::render('List', [
            'user' => Auth::user(), // Passing the authenticated user
        ]);
    }

    /**
     * Render the Table page.
     */
    public function client()
    {
        return Inertia::render('Table', [
            'user' => Auth::user(), // Passing the authenticated user
        ]);
    }

    /**
     * Render the ProfileHeader page.
     */
    public function profile()
    {
        return Inertia::render('ProfileHeader', [
            'user' => Auth::user(), // Passing the authenticated user
        ]);
    }

    /**
     * Render the Payment page.
     */
    public function payment()
    {
        // Example service data (replace with actual data retrieval from your database)
        $currentService = [
            'id' => 1,
            'name' => "Logo Design — Basic Pack",
            'description' => "Professional logo design with 3 concepts and unlimited revisions",
            'freelancer' => "Ana Silva",
            'deliveryTime' => "5 business days",
            'price' => 250.0,
            'serviceFee' => 15.0,
        ];

        return Inertia::render('Payment', [
            'user' => Auth::user(), // Passing the authenticated user
            'currentService' => $currentService,
            'stripePublicKey' => config('services.stripe.key'), // Ensure this is configured in config/services.php
        ]);
    }
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login')->with([
            'flash' => [
                'type' => 'success',
                'message' => 'User Logged Out Successfully!'
            ]
        ]);
    }
}
