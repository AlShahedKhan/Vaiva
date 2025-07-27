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
