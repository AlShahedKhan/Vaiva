<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // This is the crucial part for sharing user data globally
        Inertia::share([
            'auth' => fn () => [ // Wrap user in an 'auth' key for better organization
                'user' => Auth::check()
                    ? Auth::user()->only('id', 'name', 'email', 'avatar') // Ensure 'avatar' is included if that's your column name
                    : null,
            ],
            // You might also share other global data here, like flash messages, permissions, etc.
        ]);

        // Optional: If you use signed URLs or other URL helpers
        if (app()->environment('production')) {
            URL::forceScheme('https');
        }

        Gate::define('manage-services', function ($user) {
            return $user->role === 'freelancer';
        });
        Gate::define('access-admin', function ($user) {
            return $user->role === 'admin';
        });
    }
}
