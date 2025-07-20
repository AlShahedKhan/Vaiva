import { usePage } from "@inertiajs/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

interface PageProps {
    user: User;
    notifications?: number;
    messages?: number;
    [key: string]: any;
}

const Dashboard = () => {
    const { user, notifications = 3, messages = 2 } = usePage<PageProps>().props;

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-violet-50 to-gray-50">
            <Sidebar />

            {/* Content wrapper with left margin equal to sidebar width */}
            <div className="flex-1 -ml-52">
                <Header />

                <main className="flex-1 p-4 sm:p-6 lg:p-8" role="main">
                    <div className="lg:max-w-7xl md:max-w-2xl md:ml-58 sm:max-w-xl sm:ml-58 mx-auto">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Dashboard
                            </h1>
                            <p className="text-gray-600">
                                Welcome back, {user.name}
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
