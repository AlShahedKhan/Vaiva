import React from "react";
import { Search, CheckCircle, Menu, X } from "lucide-react";
import { Head, Link, usePage } from "@inertiajs/react";
const HeaderLogo = '/build/assets/footer/logo-footer.png'; // Adjust the path as needed
// import route from 'ziggy-js';

type HeaderProps = {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({
    isMobileMenuOpen,
    toggleMobileMenu,
}) => {
    return (
        <>
            {/* Main header itself needs a high z-index to stay above page content */}
            <header className="z-50 w-full bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img src={HeaderLogo} alt="Header Logo" />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-gray-900 hover:text-purple-600 font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                            >
                                Explore Services
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                            >
                                How It Works
                            </Link>
                            <a
                                href="#freelancer"
                                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                            >
                                Become a Freelancer
                            </a>
                        </nav>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3">
                            <Link
                                href="/login"
                                className="hidden lg:inline-flex bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium border-1 border-gray-900 transition-colors duration-200"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/register"
                                className="hidden lg:inline-flex px-4 py-2 text-gray-700 hover:text-white hover:bg-gray-900 font-medium transition-colors duration-200 border-1 border-gray-900 rounded-full"
                            >
                                Sign Up
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-1 bg-blue-500 rounded-[5px] hover:bg-black transition-colors duration-200"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </header>
            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-white z-[999] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 space-y-6">
                    <div className="flex justify-between items-center mb-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img src={HeaderLogo} alt="Header Logo" />
                        </div>
                        <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                            onClick={toggleMobileMenu}
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="space-y-4">
                        <Link
                            href="/"
                            className="block text-lg font-medium text-gray-900 hover:text-purple-600 py-2"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="block text-lg font-medium text-gray-700 hover:text-purple-600 py-2"
                            onClick={toggleMobileMenu}
                        >
                            Explore Services
                        </Link>
                        <a
                            href="#how-it-works"
                            className="block text-lg font-medium text-gray-700 hover:text-purple-600 py-2"
                            onClick={toggleMobileMenu}
                        >
                            How It Works
                        </a>
                        <a
                            href="#freelancer"
                            className="block text-lg font-medium text-gray-700 hover:text-purple-600 py-2"
                            onClick={toggleMobileMenu}
                        >
                            Become a Freelancer
                        </a>
                    </nav>

                    <div className="flex flex-col space-y-3 w-full pt-6 border-t border-gray-200 mt-6">
                        <Link href='/login'
                            className="w-full d-block bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-center"
                            onClick={toggleMobileMenu}
                        >
                            Log In
                        </Link>
                        <Link href='/register'
                            className="w-full d-block bg-white border-1 border-gray-900 hover:bg-gray-800 text-black hover:text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-center"
                            onClick={toggleMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};

export default Header;
