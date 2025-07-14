"use client";

import React, { useState } from "react";
import { Search, CheckCircle, Menu, X } from "lucide-react";
import { Head } from "@inertiajs/react";
import Footer from "../components/footer";
import Header from "../components/Header";

type HomepageProps = {};
type HowItWorksProps = {};
const HowItWorks: React.FC<HowItWorksProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 relative">
                <Header />

                {/* Hero Section */}
                <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-16">
                    {/* Background Image for all content */}
                    <div className="absolute -z-10 w-full h-210 sm:h-222 md:h-236  bg-no-repeat inset-0 pointer-events-none">
                        <img
                            src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-[65%] pb-50 sm:pb-0 sm:-mb-24 md:pb-0"
                        />
                    </div>
                    <div className="text-center space-y-8 mt-16 mb-16">
                        <h1 className="text-7xl font-bold text-gray-900 leading-tight ">
                            <span>
                                <span>Simples </span>
                                <span>desse</span>
                            </span>
                            <br />
                            <span>jeito</span>
                        </h1>
                        <p className="text-lg text-gray-500  mx-auto ">
                            Chez Vaiva, nous vous facilitons la recherche du
                            professionnel idéal et vous aidons à réaliser vos
                            travaux <br /> rapidement et en toute sécurité.
                        </p>
                    </div>
                </main>

                {/* Featured Freelancers Section */}
                <section className="relative z-10 bg-white">
                    <div className="bg-violet-600 py-6 mb-16 overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* This div will contain two identical sets of logos */}
                            <div className="flex w-[200%] animate-scroll">
                                {/* First set of logos */}
                                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full">
                                    <img
                                        src="/build/assets/images/path4.png"
                                        alt="HERING"
                                        className="h-6 sm:h-8 md:h-10 opacity-80 hover:opacity-100"
                                    />
                                    <img
                                        src="/build/assets/images/Group 1321315497.png"
                                        alt="BRAHMA"
                                        className="h-6 sm:h-8 md:h-10 opacity-80 hover:opacity-100"
                                    />
                                    <img
                                        src="/build/assets/images/Group 1321315528.png"
                                        alt="bradesco"
                                        className="h-6 sm:h-8 md:h-10 opacity-80 hover:opacity-100"
                                    />
                                    <img
                                        src="/build/assets/images/path2.png"
                                        alt="Localiza"
                                        className="h-6 sm:h-8 md:h-10 opacity-80 hover:opacity-100"
                                    />
                                    <img
                                        src="/build/assets/images/Vector.png"
                                        alt="oBOTIC"
                                        className="h-6 sm:h-8 md:h-10 opacity-80 hover:opacity-100"
                                    />
                                </div>

                                {/* Second identical set (for seamless looping) */}
                                <div className="flex items-center justify-around w-full sm:px-64 md:px-64">
                                    <img
                                        src="/build/assets/images/path4.png"
                                        alt="HERING"
                                        className="h-8 md:h-10 opacity-80 hover:opacity-100 sm:px-6 md:px-8"
                                    />
                                    <img
                                        src="/build/assets/images/Group 1321315497.png"
                                        alt="BRAHMA"
                                        className="h-8 md:h-10 opacity-80 hover:opacity-100 sm:px-6 md:px-8"
                                    />
                                    <img
                                        src="/build/assets/images/Group 1321315528.png"
                                        alt="bradesco"
                                        className="h-8 md:h-10 opacity-80 hover:opacity-100 sm:px-6 md:px-8"
                                    />
                                    <img
                                        src="/build/assets/images/path2.png"
                                        alt="Localiza"
                                        className="h-8 md:h-10 opacity-80 hover:opacity-100 sm:px-6 md:px-8"
                                    />
                                    <img
                                        src="/build/assets/images/Vector.png"
                                        alt="oBOTIC"
                                        className="h-8 md:h-10 opacity-80 hover:opacity-100 sm:px-6 md:px-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Call to Action Section */}
                <section className="relative z-10 py-16 -mt-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        {/* Subtitle */}
                        <p className="text-purple-600 text-lg md:text-xl font-medium mb-4 tracking-wide">
                            Encontre, Conecte, Contrate
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
                            Tudo em um Só Lugar
                        </h2>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300">
                                Pour les clients
                            </button>
                            <button className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300">
                                Pour les indépendants
                            </button>
                        </div>
                        <img
                            className="mt-24"
                            src="/build/assets/images/Group 1618873540.png"
                            alt=""
                        />
                    </div>
                </section>
                {/* Why Vaiva Section */}
                <section className="relative z-10 py-16 -mt-24 md:py-24 bg-gray-50 mb-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                {/* Logo and Title */}
                                <div className="space-y-6">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <img src="/build/assets/images/Vaiva_horizontal-2 2.png" alt="" />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                        Pourquoi Vaiva ?
                                    </h2>
                                </div>

                                {/* Features List */}
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                100% in Portuguese
                                            </h3>
                                            <p className="text-gray-600">
                                                Platform entirely in Portuguese
                                                for better communication
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                Des freelances vérifiés et des
                                                transactions sécurisées
                                            </h3>
                                            <p className="text-gray-600">
                                                All freelancers are verified and
                                                transactions are secure
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                Paiements locaux en real
                                                brésilien
                                            </h3>
                                            <p className="text-gray-600">
                                                Local payments in Brazilian real
                                                for convenience
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                Pas de bureaucratie, pas
                                                d'étapes cachées
                                            </h3>
                                            <p className="text-gray-600">
                                                No bureaucracy, no hidden steps
                                                - just simple solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300">
                                        Contratar um Designer
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative">
                                <div className="relative z-10">
                                    <img
                                        src="/build/assets/images/Group 1618873541.png"
                                        alt="Professional freelancer with growth metrics and ranking statistics"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default HowItWorks;
