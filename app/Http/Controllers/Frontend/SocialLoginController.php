<?php

namespace App\Http\Controllers\Frontend;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;

class SocialLoginController extends Controller
{
    // Redirect to Google
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    // Handle Google callback
    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();

        $user = User::where('email', $googleUser->getEmail())->first();

        if (!$user) {
            $user = User::create([
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'role' => 'user',
                'google_id' => $googleUser->getId(),
                'profile_img' => $googleUser->getAvatar(),
            ]);
        }

        Auth::login($user, true);

        // Using Inertia flash message for notification and redirecting
        return redirect()->route('dashboard')->with([
            'flash' => [
                'type' => 'success',
                'message' => 'Google User Logged in Successfully!'
            ]
        ]);
    }
    public function redirectTofacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    // Handle facebook callback
    public function handlefacebookCallback()
    {
        $facebookUser = Socialite::driver('facebook')->user();

        // return $facebookUser;

        // Check if the user exists or create a new one
        $fbUser = User::where('email', $facebookUser->getEmail())->first();

        if (!$fbUser) {
            // If the user doesn't exist, create a new user
            $fbUser = User::create([
                'name' => $facebookUser->getName(),
                'email' => $facebookUser->getEmail(),
                'role' => 'user',
                'facebook_id' => $facebookUser->getId(),
                'profile_img' => $facebookUser->getAvatar(),
            ]);
        }

        // Log the user in
        Auth::login($fbUser, true);
        return redirect()->route('dashboard')->with([
            'flash' => [
                'type' => 'success',
                'message' => 'Facebook User Logged in Successfully!'
            ]
        ]);
    }
}
