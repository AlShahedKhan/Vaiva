"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Search, Bell, Mail, HelpCircle, Menu } from "lucide-react";
const FooterLogo = '/footer/logo-footer.png';

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface HeaderProps {
    user?: User | null;
    notifications?: number;
    messages?: number;
    onMenuButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, notifications = 0, messages = 0, onMenuButtonClick }) => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <header className="border-b border-gray-300 w-full py-4 px-4 sm:px-6 lg:px-8" role="banner">

            {/* ✅ MOBILE VIEW ONLY (Two Rows) */}
            <div className="sm:hidden space-y-3">
                {/* Top Row - Avatar + Icons */}
                <div className="flex items-center justify-between">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <img
                            className="w-fit h-10 rounded-full object-cover ring-2 ring-gray-100"
                            src={
                                user?.avatar || FooterLogo
                            }
                            alt={`${user?.name || "User"}'s profile picture`}
                            loading="lazy"
                        />
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center space-x-3">
                        {/* Notifications */}
                        <Link
                            href="/notifications"
                            className="relative p-2 text-gray-400 hover:text-gray-600"
                            aria-label={`Notifications${notifications > 0 ? ` (${notifications} unread)` : ""}`}
                        >
                            <Bell className="h-6 w-6" />
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                                    {notifications > 99 ? "99+" : notifications}
                                </span>
                            )}
                        </Link>

                        {/* Messages */}
                        <Link
                            href="/messages"
                            className="relative p-2 text-gray-400 hover:text-gray-600"
                            aria-label={`Messages${messages > 0 ? ` (${messages} unread)` : ""}`}
                        >
                            <Mail className="h-6 w-6" />
                            {messages > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                                    {messages > 99 ? "99+" : messages}
                                </span>
                            )}
                        </Link>

                        {/* Help */}
                        <Link
                            href="/help"
                            className="p-2 text-gray-400 hover:text-gray-600"
                            aria-label="Help and support"
                        >
                            <HelpCircle className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                {/* Second Row - Menu + Search */}
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                        aria-label="Open sidebar menu"
                        onClick={onMenuButtonClick}
                    >
                        <Menu className="h-6 w-6 text-[#7E54F7] text-5xl cursor-pointer" />
                    </button>
                    <form onSubmit={handleSearch} className="flex-1 relative">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="mobile-search"
                                type="search"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                autoComplete="off"
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* ✅ DESKTOP VIEW */}
            <div className="hidden sm:flex items-center justify-between h-16">
                {/* Left - Menu + Avatar + Welcome */}
                <div className="flex items-center space-x-3">
                    <button
                        type="button"
                        className="lg:hidden p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                        aria-label="Open sidebar menu"
                        onClick={onMenuButtonClick}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100"
                            src={
                                user?.avatar ||
                                `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&color=7c3aed&background=f3f4f6`
                            }
                            alt={`${user?.name || "User"}'s profile picture`}
                            loading="lazy"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm text-gray-500 font-medium">Welcome</p>
                        <h1 className="text-lg font-semibold text-gray-900 truncate max-w-48">{user?.name || "Guest"}</h1>
                    </div>
                </div>

                {/* Center - Search Bar */}
                <div className="flex-1 max-w-2xl mx-4">
                    <form onSubmit={handleSearch} className="relative">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="search"
                                type="search"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                autoComplete="off"
                            />
                        </div>
                    </form>
                </div>

                {/* Right - Icons */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <Link
                        href="/notifications"
                        className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                        aria-label={`Notifications${notifications > 0 ? ` (${notifications} unread)` : ""}`}
                    >
                        <Bell className="h-6 w-6" />
                        {notifications > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                                {notifications > 99 ? "99+" : notifications}
                            </span>
                        )}
                    </Link>

                    {/* Messages */}
                    <Link
                        href="/messages"
                        className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                        aria-label={`Messages${messages > 0 ? ` (${messages} unread)` : ""}`}
                    >
                        <Mail className="h-6 w-6" />
                        {messages > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                                {messages > 99 ? "99+" : messages}
                            </span>
                        )}
                    </Link>

                    {/* Help */}
                    <Link
                        href="/help"
                        className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                        aria-label="Help and support"
                    >
                        <HelpCircle className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
