<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Service;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // List all services for admin
    public function index()
    {
        $services = Service::all();
        return Inertia::render('Admin/Services/Index', [
            'services' => $services
        ]);
    }
}
