"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";

// Ensure this path is correct relative to your public directory
// For the tab background, you might need a more rectangular version of Rectangle 2.png
// or adjust backgroundSize and backgroundPosition carefully.
const ActiveTabBgImage = "/images/tab.png";
const ActiveTopBgImage = "/images/top-bg.png";
const iconDash1 = "/images/dashboard-icon/1.png";
const iconDash2 = "/images/dashboard-icon/2.png";
const iconDash3 = "/images/dashboard-icon/3.png";
const iconDash4 = "/images/dashboard-icon/4.png";

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface MarketPlaceLayoutProps {
    children: React.ReactNode;
    user?: User | null;
    notifications?: number;
    messages?: number;
}

// --- Data for the Table (Placeholder for demonstration) ---
// In a real application, this data would come from an API
const weeklyData = [
    { id: 12501, name: "Summer Promo", email: "120", role: "$800", status: "Active" },
    { id: 8751, name: "New Customer Onboarding", email: "50", role: "$300", status: "Inactive" },
    { id: 10751, name: "Weekend Special", email: "90", role: "$600", status: "Active" },
];

const monthlyData = [
    { id: 12500, name: "Spring Sale", email: "350", role: "$1,200", status: "Active" },
    { id: 8750, name: "Car Insurance", email: "790", role: "$950", status: "Active" },
    { id: 10750, name: "Home Insurance", email: "180", role: "$1950", status: "Active" },
];

const allTimeData = [
    { id: 1000, name: "Annual Campaign 2024", email: "1500", role: "$5,000", status: "Active" },
    { id: 2000, name: "Holiday Offer", email: "1200", role: "$3,500", status: "Active" },
    { id: 3000, name: "Black Friday Deals", email: "2000", role: "$7,000", status: "Active" },
    { id: 4000, name: "Back to School", email: "800", role: "$2,100", status: "Inactive" },
];
// -----------------------------------------------------------

const MarketPlaceLayout: React.FC<MarketPlaceLayoutProps> = ({
    children,
    user,
    notifications = 0,
    messages = 0,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('monthly'); // Default to 'monthly' as per screenshot
    const [tableRows, setTableRows] = useState(monthlyData); // State for table data

    // Effect to update table data based on active tab
    useEffect(() => {
        if (activeTab === 'weekly') {
            setTableRows(weeklyData);
        } else if (activeTab === 'monthly') {
            setTableRows(monthlyData);
        } else if (activeTab === 'all-time') {
            setTableRows(allTimeData);
        }
    }, [activeTab]); // Re-run when activeTab changes

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
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
                <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Olá, Admin!</h1>
                        <p className="text-gray-500">Gerencie sua plataforma com facilidade.</p>
                    </div>

                    {/* Top Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                        {/* Total Users Card (with purple background and specific curve) */}
                        <div
                            className="relative p-6 rounded-2xl"
                            style={{
                                backgroundImage: `url(${ActiveTopBgImage})`,
                                backgroundSize: 'cover', // Cover the entire div
                                backgroundPosition: 'center', // Center the image
                                backgroundRepeat: 'no-repeat',
                                color: 'white',
                            }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 rounded-full">
                                    <img src={iconDash1} alt="Dashboard Icon 1" />
                                </div>
                                <span className="text-lg font-semibold">Total Services Active</span> {/* Adjusted font size */}
                            </div>
                            <p className="text-4xl font-bold mb-2">$150.00</p> {/* Adjusted font size and weight */}

                        </div>

                        {/* Other Cards */}
                        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col">
                            <div className="flex items-center mb-3">
                                <div className="rounded-ful mr-2">
                                    <img src={iconDash2} alt="Dashboard Icon 2" />
                                </div>
                                <span className="text-lg font-semibold text-black">Pending Orders</span>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">50.000</p>
                        </div>

                        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col">
                            <div className="flex items-center mb-3">
                                <div className="rounded-ful mr-2">
                                    <img src={iconDash3} alt="Dashboard Icon 3" />
                                </div>
                                <span className="text-lg font-semibold text-black">Earnings This Month</span>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">163.000</p>
                        </div>

                        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col">
                            <div className="flex items-center mb-3">
                                <div className="rounded-ful mr-2">
                                    <img src={iconDash4} alt="Dashboard Icon 4" />
                                </div>
                                <span className="text-lg font-semibold text-black">New Messages</span>
                            </div>
                            <p className="text-4xl font-bold text-gray-900">459.000</p>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex bg-white rounded-full p-1 max-w-sm mt-15 mb-15 shadow-sm" style={{ width: 'fit-content' }}>
                        <button
                            className={`
                                relative cursor-pointer py-2 px-6 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                                ${activeTab === 'weekly' ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
                            `}
                            onClick={() => setActiveTab('weekly')}
                            style={activeTab === 'weekly' ? {
                                backgroundImage: `url(${ActiveTabBgImage})`,
                                backgroundSize: '100% 100%', // Stretch to fill the button
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            } : {}}
                        >
                            Weekly
                        </button>
                        <button
                            className={`
                                relative cursor-pointer py-2 px-6 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                                ${activeTab === 'monthly' ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
                            `}
                            onClick={() => setActiveTab('monthly')}
                            style={activeTab === 'monthly' ? {
                                backgroundImage: `url(${ActiveTabBgImage})`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            } : {}}
                        >
                            Monthly
                        </button>
                        <button
                            className={`
                                relative cursor-pointer py-2 px-6 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                                ${activeTab === 'all-time' ? 'text-white' : 'text-gray-700 hover:text-gray-900'}
                            `}
                            onClick={() => setActiveTab('all-time')}
                            style={activeTab === 'all-time' ? {
                                backgroundImage: `url(${ActiveTabBgImage})`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            } : {}}
                        >
                            All Time
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white shadow-md rounded-2xl">
                        <div className="overflow-x-auto rounded-2xl">
                            <table className="min-w-full divide-y divide-gray-200 rounded-2xl">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-tl-2xl rounded-tr-2xl">
                                    {/* Removed rounded-lg from here, apply to individual th */}
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider rounded-tl-xl">User ID</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">Role</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider rounded-tr-xl">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {tableRows.map((row, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MarketPlaceLayout;
