import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
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
}

const Dashboard = () => {
    const { user } = usePage<PageProps>().props;

    const handleLogout = () => {
        router.post(
            "/logout",
            {},
            {
                onSuccess: () => {
                    window.location.href = "/";
                },
            },
        );
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-violet-50 to-gray-50">
            <Sidebar />

            {/* Content wrapper with left margin equal to sidebar width */}
            <div className="flex-1 -ml-52">
                <Header />

            </div>
        </div>
    );
};

export default Dashboard;
