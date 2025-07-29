"use client";

import React, { useState } from "react";
import { Search, Check, Menu, X } from "lucide-react";
import { Head } from "@inertiajs/react";
import Footer from "../components/footer";
import Header from "../components/Header";
import PartnerLogosMarquee from "../components/PartnerLogosMarquee";

type HomepageProps = {};
type HowItWorksProps = {};
const HowItWorks: React.FC<HowItWorksProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('clients'); // 'clients' is active by default

    // Function to determine which image to display
    const getImageSrc = () => {
        if (activeTab === 'clients') {
            return '/images/Group 1618873540.png'; // Image for clients
        } else if (activeTab === 'independants') {
            return '/images/Group 1618873540.png'; // **Replace with your actual image path for independents**
        }
        return ''; // Fallback, though typically one of the above will always match
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 relative">
                <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

                {/* Hero Section */}
                <section className="relative z-10 py-16 md:py-24 text-center px-4 sm:px-6 lg:px-0 overflow-hidden">
                    <div className="absolute -z-10  lg:h-[700px]  bg-no-repeat inset-0 pointer-events-none">
                        <img
                            src="/images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
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
                    </div>

                </section>

                {/* Featured Freelancers Section */}
                <section className="mb-24">
                    <PartnerLogosMarquee />
                </section>

                {/* Call to Action Section */}
                <section className="relative z-10 py-16 -mt-16 md:py-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        {/* Subtitle */}
                        <p className="text-purple-600 text-lg md:text-xl font-medium mb-4 tracking-wide">
                            Encontre, Conecte, Contrate
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
                            Tudo em um Só Lugar
                        </h2>

                        {/* Action Buttons - Now acting as tabs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <button
                                // Add 'bg-purple-600' and 'text-white' if active, otherwise 'bg-gray-100' and 'text-gray-800'
                                className={`w-full cursor-pointer sm:w-auto px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 ${activeTab === 'clients'
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-300'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300'
                                    }`
                                }
                                onClick={() => setActiveTab('clients')}
                            >
                                Pour les clients
                            </button>
                            <button
                                // Add 'bg-purple-600' and 'text-white' if active, otherwise 'bg-gray-100' and 'text-gray-800'
                                className={`w-full cursor-pointer sm:w-auto px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 ${activeTab === 'independants'
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-300'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300'
                                    }`
                                }
                                onClick={() => setActiveTab('independants')}
                            >
                                Pour les indépendants
                            </button>
                        </div>

                        {/* Dynamic Image based on activeTab */}
                        <img
                            className="mt-24"
                            src={getImageSrc()} // Source is now dynamic
                            alt={`Illustration for ${activeTab}`}
                        />
                    </div>
                </section>
                {/* Why Vaiva Section */}
                <section className="relative z-10 py-16 -mt-24 md:py-24 bg-gray-50 mb-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between">
                            {/* Left Content */}
                            <div className="space-y-8 ">
                                {/* Logo and Title */}
                                <div className="space-y-0">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <img
                                            src="/images/Vaiva_horizontal-2 2.png"
                                            alt=""
                                        />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                        Pourquoi Vaiva ?
                                    </h2>
                                </div>

                                {/* Features List */}
                                <div className="md:grid grid-cols-2 gap-4 space-y-3">
                                    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black mb-1">
                                                100% in Portuguese
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black mb-1">
                                                Paiements locaux en real brésilien
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black mb-1">
                                                Des freelances vérifiés et des transactions sécurisées
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-center space-x-4 bg-white p-4 pb-0 h-30 rounded-lg">
                                        <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-black">
                                                Pas de bureaucratie, pas d’étapes cachées – juste...
                                            </h3>
                                        </div>
                                    </div>
                                </div>


                                {/* CTA Button */}
                                <div className="pt-4">
                                    <button className="bg-gray-900 cursor-pointer hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300">
                                        Contratar um Designer
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative">
                                <div className="relative z-10">
                                    <img
                                        src="/images/Group 1618873541.png"
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
