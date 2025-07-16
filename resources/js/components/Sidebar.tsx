import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    Calendar,
    ShoppingCart,
    BarChart3,
    User,
    FileText,
    HelpCircle,
    Menu,
    X,
} from "lucide-react";
const Logo = "/images/logo.png"; // Adjust the path as needed
const Icon1 = "/images/icon1.png"; // Adjust the path as needed
const Icon2 = "/images/icon2.png"; // Adjust the path as needed
const Icon3 = "/images/icon3.png"; // Adjust the path as needed
const Icon4 = "/images/icon4.png"; // Adjust the path as needed
const Icon5 = "/images/icon5.png"; // Adjust the path as needed
const Icon6 = "/images/icon6.png"; // Adjust the path as needed

interface MenuItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

interface SidebarProps {
    user?: {
        name: string;
        email: string;
        avatar?: string;
    };
    notifications?: number;
}

const Sidebar: React.FC<SidebarProps> = ({ user, notifications = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const menuItems = [
        {
            name: "dashboard",
            href: "/dashboard",
            icon: Icon1,
        },
        {
            name: "orders",
            href: "/orders",
            icon: Icon2,
        },
        {
            name: "analytics",
            href: "/analytics",
            icon: Icon3,
        },
        {
            name: "users",
            href: "/users",
            icon: Icon4,
        },
        {
            name: "documents",
            href: "/documents",
            icon: Icon5,
        },
        {
            name: "help",
            href: "/help",
            icon: Icon6,
        },
    ];

    const isActive = (href: string) => url.startsWith(href);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 md:mt-24 sm:mt-24 md:ml-0 left-2 z-50 p-2 rounded-md bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Toggle navigation menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6 text-gray-600" />
                ) : (
                    <Menu className="h-6 w-6 text-gray-600" />
                )}
            </button>

            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-40 bg-white border-r border-gray-200
          transition-transform duration-300 ease-in-out
          h-full w-full sm:w-24  lg:w-32
          rounded-2xl lg:m-2
          lg:translate-x-0 lg:static lg:z-auto lg:h-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-center h-28 border-b border-gray-200 lg:border-b-gray-200 border-b-gray-100">
                        <Link href="/" className="relative flex items-center">
                            <div className="flex items-center space-x-2">
                                <img className="h-20 md:h-15 sm:h-14" src={Logo} alt="Header Logo" />
                            </div>
                            {/* Close button for mobile */}
                            <button
                                onClick={toggleSidebar}
                                className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-100"
                                aria-label="Close menu"
                                title="Close menu"
                            >
                                {/* <X className="h-6 w-6 text-gray-600" /> */}
                            </button>
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 py-6 md:mt-7 sm:mt-7">
                        <ul className="space-y-4 sm:space-y-3 md:space-y-2 px-8 sm:px-6 md:px-4 lg:px-8">
                            {menuItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`
                        group flex items-center sm:justify-start lg:justify-center rounded-xl
                        transition-all duration-200 relative p-3 sm:p-2
                        w-full sm:h-12 md:h-13 lg:w-14 lg:h-14
                        ${
                            active
                                ? "bg-[#7E54F7] shadow-sm"
                                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                        }
                      `}
                                            role="menuitem"
                                            aria-label={item.label}
                                            title={item.label}
                                        >
                                            <img src={item.icon} alt={item.label} className={`w-7 h-7 ${active ? "scale-110" : "group-hover:scale-105"} transition-transform duration-200`} />
                                            <span className="ml-3 text-sm font-medium sm:inline lg:hidden text-gray-700">
                                                {item.label}
                                            </span>
                                            {/* Active indicator */}
                                            {active && (
                                                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-[#7E54F7] rounded-l-full"></div>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* User Profile Section - Matching your exact design */}
                    {user && (
                        <div className="p-3">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-00 flex items-center justify-center relative">
                                <Link
                                    href="/profile"
                                    className="relative group"
                                    aria-label={`User profile: ${user.name}`}
                                    title={`${user.name} - View Profile`}
                                >
                                    {/* User Avatar */}
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                        <img
                                            src={
                                                user.avatar ||
                                                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bytHT0ys1WbvDmnTWOdXbyh0d3QRTI.png"
                                            }
                                            alt={`${user.name}'s avatar`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Purple Notification Badge */}
                                    {notifications > 0 && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-lg flex items-center justify-center shadow-sm">
                                            <span className="text-white text-xs font-medium">
                                                {notifications > 9
                                                    ? "9+"
                                                    : notifications}
                                            </span>
                                        </div>
                                    )}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="fixed bottom-4 p-1 bg-white shadow-lg border-1 border-gray-100 rounded-2xl">
                    <img src="/images/user profile.png" alt="" />
                </div>
            </aside>

            {/* Main content spacer for desktop */}
            <div
                className="hidden lg:block w-20 flex-shrink-0"
                aria-hidden="true"
            ></div>
        </>
    );
};

export default Sidebar;
