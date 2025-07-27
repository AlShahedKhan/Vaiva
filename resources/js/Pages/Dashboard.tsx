"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";
import FlashMessage from './services/FlashMessage';

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface DashboardLayoutProps {
    children: React.ReactNode;
    user?: User | null;
    notifications?: number;
    messages?: number;
    flash?: { type: string; message: string } | null; // Flash message passed from Inertia
}

const Dashboard: React.FC<DashboardLayoutProps> = ({
    children,
    user,
    notifications = 3,
    messages = 4,
    flash
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {flash && flash.message && (
                <FlashMessage type={flash.type as 'success' | 'error' | 'info' | 'warning'} message={flash.message} />
            )}
            {/* Sidebar */}
            <Sidebar
                notifications={notifications}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header
                    user={user}
                    notifications={notifications}
                    messages={messages}
                    onMenuButtonClick={() => setIsSidebarOpen(true)} // Toggle sidebar open
                />

                {/* Page Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8" role="main">
                    <div className="">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Dashboard
                            </h1>
                            <p className="text-gray-600">
                                Welcome back, {user?.name}
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* Dashboard Overview */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
                                </div>

                                <div className="space-y-4">
                                    {/* Add your dashboard metrics and content here */}
                                    <p className="text-gray-600">This is your dashboard overview section.</p>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                                </div>

                                <div className="space-y-4">
                                    {/* Add your recent activity content here */}
                                    <p className="text-gray-600">Your recent activities will appear here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
