"use client";

import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { X } from "lucide-react";

// Assuming these paths are correct relative to where Sidebar.tsx is
const Logo = "/images/logo.png";
const Icon1 = "/images/icon1.png"; // Replace with your actual icon paths
const Icon2 = "/images/icon2.png";
const Icon3 = "/images/icon3.png";
const Icon4 = "/images/icon4.png";
const Icon5 = "/images/icon5.png";
const Icon6 = "/images/icon6.png";
const ActiveItemBg = "/images/sidebar/sidebar-icon-bg.png"; // Path to your active background image from Figma

interface MenuItem {
    name: string;
    href: string;
    icon: string;
    label: string;
}

interface SidebarProps {
    user?: {
        name: string;
        email: string;
        avatar?: string;
    };
    notifications?: number;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, notifications = 0, isOpen, setIsOpen }) => {
    const { url } = usePage();

    const menuItems: MenuItem[] = [
        {
            name: "dashboard",
            href: "/marketplace",
            icon: Icon1,
            label: "Dashboard",
        },
        {
            name: "orders",
            href: "/list",
            icon: Icon2,
            label: "Orders",
        },
        {
            name: "analytics",
            href: "/table",
            icon: Icon3,
            label: "Analytics",
        },
        {
            name: "users",
            href: "/users",
            icon: Icon4,
            label: "Users",
        },
        {
            name: "documents",
            href: "/documents",
            icon: Icon5,
            label: "Documents",
        },
        {
            name: "help",
            href: "/help",
            icon: Icon6,
            label: "Help",
        },
    ];

    const isActive = (href: string) => url.startsWith(href);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* 1. Remove Mobile Overlay or make it transparent */}
            {isOpen && (
                <div
                    // Removed bg-black bg-opacity-50.
                    // If you want to keep the overlay but make it invisible, use 'bg-transparent'
                    // If you want to remove it completely, remove this div block entirely
                    className="lg:hidden fixed inset-0 z-40 bg-transparent" // Changed bg-black bg-opacity-50 to bg-transparent
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 z-50 bg-white border-r border-gray-200
                    transition-transform duration-300 ease-in-out
                    h-full w-64 sm:w-1/2 lg:w-32
                    lg:translate-x-0 lg:static lg:z-auto lg:h-auto lg:rounded-2xl lg:m-2 lg:mr-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="flex flex-col h-full">
                    {/* Logo Section - Adjusted for X icon */}
                    <div className="flex items-center justify-between h-20 border-b border-gray-200 px-4 lg:justify-center"> {/* Added lg:justify-center */}
                        <Link href="/" className="flex items-center lg:w-full lg:justify-center"> {/* Added lg:w-full and lg:justify-center */}
                            <img className="h-14 sm:h-12 md:h-10" src={Logo} alt="Logo" />
                        </Link>
                        {/* The X button should only be visible on mobile, so keep lg:hidden */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                toggleSidebar();
                            }}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100" // Kept lg:hidden
                            aria-label="Close menu"
                            title="Close menu"
                        >
                            <X className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex-1 py-6">
                        <ul className="space-y-4 px-4">
                            {menuItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`
                                                group flex justify-center items-center rounded-xl
                                                transition-all duration-200 relative p-3
                                                w-full -mt-3 justify-start${active
                                                    ? "" // Custom style will apply background
                                                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                                                }
                                            `}
                                            style={active ? {
                                                backgroundImage: `url(${ActiveItemBg})`,
                                                backgroundSize: '100% 100%', // Stretch to fill the element for this specific shape
                                                backgroundPosition: 'center', // Align to left, center vertically
                                                backgroundRepeat: 'no-repeat',
                                                width: '100%', // Crucial to not repeat the shape
                                                height: '150px', // Crucial to not repeat the shape

                                            } : {}}
                                            role="menuitem"
                                            aria-label={item.label}
                                            title={item.label}
                                        >
                                            <img src={item.icon} alt={item.label} className={`w-7 h-7 ${active ? "scale-110" : "group-hover:scale-105"} transition-transform duration-200`} />
                                            {/* Hide label on larger screens to keep it icon-only, also adjust text color for active state */}
                                            <span className={`ml-3 text-sm font-medium hidden lg:hidden ${active ? "text-white" : "text-gray-700"}`}>
                                                {item.label}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* User Profile Section */}
                    {user && (
                        <div className="p-3">
                            <div className="bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center relative">
                                <Link
                                    href="/profile"
                                    className="relative group"
                                    aria-label={`User profile: ${user.name}`}
                                    title={`${user.name} - View Profile`}
                                >
                                    <div className="w-full h-full overflow-hidden">
                                        <img
                                            src={
                                                user.avatar ||
                                                "/images/sidebar/bottom-profile.png"
                                            }
                                            alt={`${user.name}'s avatar`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

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
            </aside>
        </>
    );
};

export default Sidebar;
