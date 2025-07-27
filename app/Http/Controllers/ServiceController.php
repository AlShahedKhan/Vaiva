<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Service;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // List all services
    public function index()
    {
        $services = Service::all();
        return Inertia::render('Services/Index', [
            'services' => $services
        ]);
    }

    // Show create form
    public function create()
    {
        return Inertia::render('Services/Create');
    }

    // Store new service
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            // Add other fields as needed
        ]);
        Service::create($validated);
        return redirect()->route('services.index')->with('success', 'Service created successfully!');
    }

    // Show edit form
    public function edit(Service $service)
    {
        return Inertia::render('Services/Edit', [
            'service' => $service
        ]);
    }

    // Update service
    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            // Add other fields as needed
        ]);
        $service->update($validated);
        return redirect()->route('services.index')->with('success', 'Service updated successfully!');
    }

    // Delete service
    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->route('services.index')->with('success', 'Service deleted successfully!');
    }

        // Public service listing with optional search/filter
    public function listing(Request $request)
    {
        // You can add search/filter logic here later
        $services = Service::all();
        return Inertia::render('Services/Listing', [
            'services' => $services
        ]);
    }
}
