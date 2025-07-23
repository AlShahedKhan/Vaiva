"use client";
import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header_Dashboard";
const ActiveTopBgImage = "/images/top-bg.png";
const iconDash1 = "/images/dashboard-icon/1.png";
const iconDash2 = "/images/dashboard-icon/2.png";
const iconDash3 = "/images/dashboard-icon/3.png";
const iconDash4 = "/images/dashboard-icon/4.png";
const uiImage = '/images/dashboard-service-ui.png';

// User interface
interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string; // Optional field
}

// Props for layout component
interface ListLayoutProps {
    children: React.ReactNode;
    user?: User | null; // Optional user prop
    notifications?: number; // Optional, default 0
    messages?: number; // Optional, default 0
    orders: Order[]; // Now passing orders as a prop
    currentStatus: string; // Current status prop
}

// Order interface with specific string literal types for status
interface Order {
    id: string;
    clientName: string;
    orderDate: string;
    status: 'Active' | 'Pending' | 'In Progress' | 'Completed' | 'Canceled';
}

// OrdersIndexProps can be passed from Laravel (if you're working with it)

// ListLayout Component
const ListLayout: React.FC<ListLayoutProps> = ({
    children,
    user,
    notifications = 0,
    messages = 0,
    orders, // Receiving orders as a prop
    currentStatus, // Receiving currentStatus as a prop
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const statuses = ['All', 'Active', 'Pending', 'In Progress', 'Completed', 'Canceled'];
    const getStatusClasses = (status: Order['status']) => {
        switch (status) {
            case 'Active':
                return 'bg-emerald-100 text-emerald-700';
            case 'Pending':
                return 'bg-amber-100 text-amber-700';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700';
            case 'Completed':
                return 'bg-green-100 text-green-700';
            case 'Canceled':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-200 text-gray-700';
        }
    };
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
                <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 relative"> {/* Added relative to main */}
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

                    <div className="bg-gray-50 relative">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meus Serviços</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                            {/* Card 1 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                                <img
                                    src={uiImage} // Replace with your actual image path
                                    alt="Illustration depicting UI/UX design elements for social media logo creation"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                        <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                    </div>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                                <img
                                    src={uiImage}  // Replace with your actual image path
                                    alt="Illustration for a web development service, showing code snippets and a monitor"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                        <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                    </div>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                                <img
                                    src={uiImage}  // Replace with your actual image path
                                    alt="Illustration for mobile app development service, showing a smartphone with app interfaces"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                        <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                    </div>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                                <img
                                    src={uiImage}  // Replace with your actual image path
                                    alt="Illustration depicting branding and identity design, with abstract shapes and colors"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                        <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                    </div>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Orders List/Table */}
                    <div className="p-5 font-sans bg-gray-50 min-h-screen box-border
                                    lg:absolute lg:top-80 lg:right-5
                                    ">
                        <Head title="Orders" />
                        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                                <h1 className="text-3xl font-bold text-gray-800 m-0">Orders</h1>
                                <div className="flex items-center gap-2">
                                    {/* Three dots icon/menu - placeholder */}
                                    <div className="w-6 h-6 flex flex-col justify-around items-center cursor-pointer">
                                        <span className="block w-1 h-1 rounded-full bg-gray-500"></span>
                                        <span className="block w-1 h-1 rounded-full bg-gray-500"></span>
                                        <span className="block w-1 h-1 rounded-full bg-gray-500"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Tab System */}
                            <div className="flex gap-2 p-4 border-b border-gray-200 overflow-x-auto whitespace-nowrap">
                                {statuses.map((status) => (
                                    <Link
                                        key={status}
                                        href={status === 'All' ? '/orders' : `/orders?status=${status}`}
                                        className={`
                                            px-4 py-2 rounded-lg transition duration-200 ease-in-out
                                            ${currentStatus === status || (currentStatus === 'All' && status === 'All')
                                                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                                                : 'bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100'}
                                            flex-shrink-0
                                        `}
                                    >
                                        {status}
                                    </Link>
                                ))}
                            </div>

                            {/* Orders List/Table */}
                            <div>
                                {/* Header Row */}
                                <div className="grid grid-cols-[0.8fr_2fr_1.2fr_1fr] bg-gray-100 text-gray-600 px-6 py-3 font-semibold text-sm uppercase tracking-wider border-b border-gray-200">
                                    <div>Order ID</div>
                                    <div>Client Name</div>
                                    <div>Order Date</div>
                                    <div>Status</div>
                                </div>

                                {/* Data Rows */}
                                {orders.length > 0 ? (
                                    orders.map((order) => {
                                        const statusClasses = getStatusClasses(order.status);
                                        return (
                                            <div
                                                key={order.id + order.clientName + order.status}
                                                className="grid grid-cols-[0.8fr_2fr_1.2fr_1fr] px-6 py-3 items-center text-sm text-gray-700 border-1 border-gray-300 m-3 rounded-lg"
                                            >
                                                <div className="font-medium">{order.id}</div>
                                                <div>{order.clientName}</div>
                                                <div>{order.orderDate}</div>
                                                <div>
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-block whitespace-nowrap ${statusClasses}`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="p-6 text-center text-gray-600">
                                        No orders found for this status.
                                    </div>
                                )}
                            </div>

                            <div className="p-4 text-right text-sm text-gray-600 border-t border-gray-200">
                                <a href="#" className="text-indigo-600 font-semibold hover:underline">View All</a>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default ListLayout;
