<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        // Hardcoded dummy data - This simulates data you'd normally get from a database
        $allOrders = [
            ['id' => '#213', 'clientName' => 'Randy Lubin', 'orderDate' => '28 Jan 2025', 'status' => 'Active'],
            ['id' => '#214', 'clientName' => 'Ann Mango', 'orderDate' => '28 Jan 2025', 'status' => 'Pending'],
            ['id' => '#215', 'clientName' => 'Martin Lipshutz', 'orderDate' => '28 Jan 2025', 'status' => 'In Progress'],
            ['id' => '#216', 'clientName' => 'Zaire Donin', 'orderDate' => '28 Jan 2025', 'status' => 'Completed'],
            ['id' => '#217', 'clientName' => 'Alfonso Lubin', 'orderDate' => '28 Jan 2025', 'status' => 'Canceled'],
            ['id' => '#218', 'clientName' => 'Bibi Aisha', 'orderDate' => '29 Jan 2025', 'status' => 'Active'],
            ['id' => '#219', 'clientName' => 'Chris Paul', 'orderDate' => '29 Jan 2025', 'status' => 'Pending'],
        ];

        // Get the requested status from the URL query parameter, default to 'All'
        $requestedStatus = $request->input('status', 'All');

        // Filter orders based on the requested status
        $filteredOrders = collect($allOrders)->filter(function ($order) use ($requestedStatus) {
            if ($requestedStatus === 'All') {
                return true; // Show all orders if 'All' tab is selected
            }
            return $order['status'] === $requestedStatus;
        })->values()->all(); // Reset keys after filtering

        return Inertia::render('Orders/Index', [
            'orders' => $filteredOrders,
            'currentStatus' => $requestedStatus // Pass the currently active tab status to the frontend
        ]);
    }
}
