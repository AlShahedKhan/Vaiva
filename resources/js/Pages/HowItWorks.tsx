"use client";

import React, { useState } from "react";
import {
    Search,
    CheckCircle,
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    Star,
    Plus,
    Minus,
} from "lucide-react";
import { Head } from "@inertiajs/react";
import Footer from "../components/footer";

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [logoIndex, setLogoIndex] = useState(0);
    const [carouselImages, setCarouselImages] = useState([
        "/build/assets/images/Group 1618873530.png",
        "/build/assets/images/Group 1618873531.png",
        "/build/assets/images/Group 1618873532.png",
    ]);

    const [carouselImages1, setCarouselImages1] = useState([
        "/build/assets/images/Group 1618873533.png",
        "/build/assets/images/Group 1618873534.png",
        "/build/assets/images/Group 1618873535.png",
    ]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const freelancers = [
        {
            name: "Gustavo Almeida",
            role: "Designer gráfico",
            image: "/placeholder.svg?height=300&width=250",
        },
        {
            name: "Caio Oliveira",
            role: "Editor de vídeo",
            image: "/placeholder.svg?height=300&width=250",
        },
        {
            name: "Letícia Nogueira",
            role: "Redatora freelancer",
            image: "/placeholder.svg?height=300&width=250",
        },
    ];

    const handlePrev = () => {
        setCarouselImages((prev) => {
            const arr = [...prev];
            arr.unshift(arr.pop());
            return arr;
        });
    };

    const handleNext = () => {
        setCarouselImages((prev) => {
            const arr = [...prev];
            arr.push(arr.shift());
            return arr;
        });
    };
    const handlePrev1 = () => {
        setCarouselImages1((prev) => {
            const arr = [...prev];
            arr.unshift(arr.pop());
            return arr;
        });
    };

    const handleNext1 = () => {
        setCarouselImages1((prev) => {
            const arr = [...prev];
            arr.push(arr.shift());
            return arr;
        });
    };

    const testimonials = [
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "/build/assets/images/user profile.png",
            text: "Entregou rápido e ficou melhor do que eu imaginei. Voltarei a contratar com certeza.",
        },
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "/build/assets/images/user profile.png",
            text: "Tudo certinho, combinado pelo chat e entregue no prazo. Sem dor de cabeça.",
        },
        {
            name: "Elena Rossi",
            role: "Owner Seaview Boutique Hotel",
            image: "/build/assets/images/user profile.png",
            text: "Primeira vez usando a Vaiva e já resolveu meu problema. Muito prático.",
        },
    ];
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [testimonialCards, setTestimonialCards] = useState(testimonials);
    const handlePrevTestimonial = () => {
        setTestimonialCards((prev) => {
            const arr = [...prev];
            arr.unshift(arr.pop());
            return arr;
        });
    };
    const handleNextTestimonial = () => {
        setTestimonialCards((prev) => {
            const arr = [...prev];
            arr.push(arr.shift());
            return arr;
        });
    };

    const [openFaq, setOpenFaq] = useState(0);
    const faqItems = [
        {
            question: "Posso conversar com o profissional antes de contratar?",
            answer: "Lorem ipsum dolor sit amet consectetur. Volutpat id donec euismod eu eu risus. Quis sagittis nunc ultricies eu in est. Pretium leo arcu eget ultricies faucibus amet nunc. Sed quis quis vulputate volutpat purus. Facilisis et quis sit tincidunt ipsum. Convallis est consectetur commodo amet sed odio a. Sollicitudin laoreet adipiscing id semper vulputate. Morbi consequat gravida tincidunt.",
        },
        {
            question: "Como funciona o pagamento pela plataforma?",
            answer: "...",
        },
        {
            question: "Os profissionais são avaliados por outros usuários?",
            answer: "...",
        },
        {
            question: "A Vaiva tem aplicativo para celular?",
            answer: "...",
        },
        {
            question: "Como encontro um prestador de serviço?",
            answer: "...",
        },
    ];

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

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 relative">
                {/* Header */}
                <header className="relative z-10 w-full bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0">
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
                <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-16">
                    {/* Background Image for all content */}
                    <div className="absolute -z-10 w-full h-210 sm:h-222 md:h-236  bg-no-repeat inset-0 pointer-events-none">
                        <img
                            src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-full pb-50 sm:pb-0 sm:-mb-24 md:pb-0"
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
                        <p className="text-lg text-gray-500  mx-auto ">Chez Vaiva, nous vous facilitons la recherche du professionnel idéal et vous aidons à réaliser vos travaux <br /> rapidement et en toute sécurité.</p>
                    </div>
                    {/* <div className="max-w-7xl items-center">
                        <div className="text-center ">
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight ">
                                    <span className="block sm:flex sm:space-x-3  sm:justify-center">
                                        <span className="block">Simples</span>
                                        <span className="block"> desse</span>
                                    </span>
                                    <span className="block">jeito</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600  mx-auto lg:mx-0">
                                   Chez Vaiva, nous vous facilitons la recherche du professionnel idéal et vous aidons à réaliser vos travaux rapidement et en toute sécurité.
                                </p>
                            </div>
                        </div>
                    </div> */}
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

                <Footer />
            </div>
        </>
    );
};

export default Homepage;
