import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";
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

interface Order {
    service: string;
    freelancer: string;
    status: 'In Progress' | 'Completed' | 'Canceled';
    price: string;
}

interface TableLayoutProps {
    children?: React.ReactNode;
    user?: User | null;
    notifications?: number;
    messages?: number;
}

const orders: Order[] = [
    {
        service: 'Logo Design – Basic Brand Pack',
        freelancer: 'Ana Silva',
        status: 'In Progress',
        price: '$1,200',
    },
    {
        service: 'WordPress E-commerce Setup',
        freelancer: 'Carlos Mendes',
        status: 'Completed',
        price: '$950',
    },
    {
        service: 'Social Media Ad Campaign',
        freelancer: 'Luiza Gomes',
        status: 'Canceled',
        price: '$1950',
    },
];

const TableLayout: React.FC<TableLayoutProps> = ({
    children,
    user,
    notifications = 0,
    messages = 0,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentView, setCurrentView] = useState<'list' | 'grid'>('list');

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'In Progress':
                return 'bg-purple-200 text-purple-800';
            case 'Completed':
                return 'bg-green-200 text-green-800';
            case 'Canceled':
                return 'bg-red-200 text-red-800';
            default:
                return 'bg-gray-200 text-gray-800';
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
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <Header
                    user={user}
                    notifications={notifications}
                    messages={messages}
                    onMenuButtonClick={() => setIsSidebarOpen(true)}
                />



                {/* Header Section */}
                <div className="p-4 lg:p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Bem-vindo ao seu painel</h1>
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
                    {/* Table Section */}

                    <div className="p-4 overflow-x-auto border-t border-gray-300 mt-15 lg:pt-10">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-semibold text-gray-800">Meus Pedidos</h1>
                            <div className="flex space-x-2">
                                {/* লিস্ট আইকন */}
                                <button
                                    onClick={() => setCurrentView('list')} className={`p-2 rounded-md transition-colors duration-200 ${currentView === 'list' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-200 text-gray-600'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                </button>
                                {/* গ্রিড আইকন */}
                                <button
                                    onClick={() => setCurrentView('grid')}
                                    className={`p-2 rounded-md transition-colors duration-200
                         ${currentView === 'grid' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-200 text-gray-600'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="min-w-[767px] space-y-3 bg-white pb-4 rounded-2xl">
                                {/* Table Header */}
                                <div className="hidden md:grid grid-cols-5 pl-6 bg-purple-700 text-white text-lg font-semibold uppercase tracking-wider p-3 rounded-tl-lg rounded-tr-lg">
                                    <div>Serviço</div>
                                    <div>Freelancer</div>
                                    <div>Status</div>
                                    <div>Preço</div>
                                    <div>Ação</div>
                                </div>

                                {/* Table Rows */}
                                {/* Table Rows */}
                                {orders.map((order, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-5 m-4 items-center bg-white border border-gray-300 rounded-lg p-4 text-sm"
                                    >
                                        <div>{order.service}</div>
                                        <div>{order.freelancer}</div>
                                        <div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                                    order.status
                                                )}`}
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                        <div>{order.price}</div>
                                        <div>
                                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg text-sm">
                                                Ver Detalhes
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Optional children rendering */}
                {children}
            </main>
        </div>
    );
};

export default TableLayout;
