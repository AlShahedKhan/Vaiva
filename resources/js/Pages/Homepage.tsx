"use client";

import React from "react";
import { Search, CheckCircle, Star, Menu, X } from "lucide-react";
import { Head } from "@inertiajs/react";

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <Head>
                <title>
                    Vaiva - Connect, Combine, Resolve | Freelance Platform
                </title>
                <meta
                    name="description"
                    content="Vaiva is the premier freelance platform where you can connect with top professionals, combine skills, and resolve your business needs. Simple and effective."
                />
                <meta
                    name="keywords"
                    content="freelance, freelancer, services, remote work, professionals, hire, connect"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:title"
                    content="Vaiva - Connect, Combine, Resolve"
                />
                <meta
                    property="og:description"
                    content="Premier freelance platform connecting businesses with top professionals"
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://vaiva.com" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
                {/* Header */}
                <header className="w-full bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 md:h-20">
                            {/* Logo */}
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-gray-900">
                                    Vaiva
                                </span>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-8">
                                <a
                                    href="#home"
                                    className="text-gray-900 hover:text-purple-600 font-medium transition-colors duration-200"
                                >
                                    Home
                                </a>
                                <a
                                    href="#services"
                                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                                >
                                    Explore Services
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="#freelancer"
                                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                                >
                                    Become a Freelancer
                                </a>
                            </nav>

                            {/* Auth Buttons */}
                            <div className="flex items-center space-x-3">
                                <button className="hidden sm:inline-flex px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                                    Log In
                                </button>
                                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                                    Sign Up
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-600" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="p-6 space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">
                                    Vaiva
                                </span>
                            </div>
                            <button
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                onClick={toggleMobileMenu}
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                        <nav className="space-y-4">
                            <a
                                href="#home"
                                className="block text-lg font-medium text-gray-900 hover:text-purple-600 py-2"
                            >
                                Home
                            </a>
                            <a
                                href="#services"
                                className="block text-lg font-medium text-gray-700 hover:text-purple-600 py-2"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#how-it-works"
                                className="block text-lg font-medium text-gray-700 hover:text-purple-600 py-2"
                            >
                                How It Works
                            </a>
                            <a
                                href="#freelancer"
                                className="block text-lg font-medium text-gray-700 hover:text-purple-600 py-2"
                            >
                                Become a Freelancer
                            </a>
                        </nav>
                        <div className="space-y-3 pt-6 border-t border-gray-200">
                            <button className="w-full text-left py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200">
                                Log In
                            </button>
                            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isMobileMenuOpen && (
                    <div
                        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={toggleMobileMenu}
                    />
                )}

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                    <span className="block">Conecte.</span>
                                    <span className="block">Combine.</span>
                                    <span className="block">Resolva.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
                                    Simples desse jeito.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="relative max-w-md mx-auto lg:mx-0">
                                <input
                                    type="text"
                                    placeholder="Encontre o que você está buscando aqui"
                                    className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm transition-colors duration-200"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200">
                                    <Search className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/build/assets/images/Mask group.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="absolute inset-0">
                        <img
                            src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Homepage;
