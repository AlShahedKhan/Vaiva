<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    // List all users for admin
    public function index()
    {
        $users = User::all();
        return Inertia::render('Admin/Users/Index', [
            'users' => $users
        ]);
    }

    public function approve(User $user)
    {
        $user->role = 'freelancer'; // Or assign via spatie/laravel-permission
        $user->save();

        return redirect()->back()->with('success', 'User approved as freelancer.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back()->with('success', 'User has been rejected and deleted.');
    }
}
