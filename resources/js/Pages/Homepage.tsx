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
                    <div className="absolute -z-10 w-full h-[800px] bg-no-repeat inset-0 pointer-events-none">
                        <img
                            src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight ">
                                    <span className="block sm:flex sm:space-x-3  sm:justify-center">
                                        <span className="block">Conecte.</span>
                                        <span className="block">Combine.</span>
                                    </span>
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
                        <div className="sm:flex sm:justify-center md:justify-center">
                            <img
                                src="/build/assets/images/Mask group.png"
                                alt=""
                            />
                        </div>
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

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Aqui, quem faz é valorizado.
                            </h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                A Vaiva é uma plataforma brasileira que conecta
                                prestadores de serviços a clientes de forma
                                simples, segura e acessível, com suporte em
                                português e pagamentos em real, facilitando a
                                contratação de serviços no mercado local.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 justify-center w-full px-2 md:px-8">
                            {/* Left button */}
                            <button
                                className=" p-2  transition"
                                aria-label="Scroll left"
                                onClick={handlePrev}
                            >
                                <ChevronLeft className="w-6 h-6 text-violet-600" />
                            </button>
                            {/* Visible logos */}
                            <div className="overflow-hidden flex justify-center flex-1">
                                <div className="flex gap-4 sm:gap-6 md:gap-8 w-full">
                                    {carouselImages.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt=""
                                            className="object-contain mx-auto w-full sm:w-full md:w-1/2 lg:w-1/3 h-40 sm:h-116 md:h-64 lg:h-[330px] "
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right button */}
                            <button
                                className="p-2  transition"
                                aria-label="Scroll right"
                                onClick={handleNext}
                            >
                                <ChevronRight className="w-6 h-6 text-violet-600" />
                            </button>
                        </div>
                    </div>
                </section>
                {/* Platform Services Section */}
                <section className="relative z-10 py-16 bg-[#1E1845] mx-4 rounded-t-2xl mt-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-4 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Os serviços da plataforma
                            </h2>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium transition-all duration-200 border border-white/20">
                                Ver todos →
                            </button>
                        </div>

                        {/* Service Cards */}
                        <div className="flex items-center justify-between gap-4 mb-12">
                            {/* Left Button */}
                            <button
                                className=" rounded-full shadow p-1 w-8 h-8 flex items-center justify-center  transition"
                                aria-label="Scroll left"
                                onClick={handlePrev1}
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>

                            {/* Carousel Container */}
                            <div className="overflow-hidden flex-1">
                                <div className="flex gap-4 sm:gap-6 md:gap-8 w-full">
                                    {carouselImages1.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt=""
                                            className="
          object-contain
          mx-auto
          rounded-xl
          h-40
          sm:h-112
          md:h-[280px]
          lg:h-[330px]
          w-full
          sm:w-full
          md:w-1/2
          lg:w-1/3
          max-w-full
        "
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right Button */}
                            <button
                                className=" rounded-full shadow p-1 w-8 h-8 flex items-center justify-center  transition"
                                aria-label="Scroll right"
                                onClick={handleNext1}
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                </section>
                {/* Statistics Bar */}
                <section className="">
                    <div className="bg-[#7E54F7] backdrop-blur-sm p-6 borde overflow-hidden w-full">
                        <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm animate-scroll w-[200%]">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                <span>Freelancers</span>
                            </div>
                            <div className="text-white/70">
                                858 checks realizados
                            </div>
                            <div className="text-white/70">Desde 2025</div>
                            <div className="text-white/70 font-bold">
                                1407.56 • 745.65
                            </div>
                            <div className="text-white/70">1058 projetos</div>
                            <div className="text-white/70">
                                858 checks realizados
                            </div>
                            <div className="text-white/70">Desde 2025</div>
                            <div className="text-white/70">
                                1058 profissionais digitais
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mt-24 text-center">
                        <h1 className=" text-5xl font-bold sm:text-4xl">
                            A Vaiva nasceu pra facilitar a vida <br /> de quem
                            contrata e de quem <br /> oferece serviços digitais.
                        </h1>
                        <p className="mt-8 text-[#D9D9D9]">
                            Tudo em português, com pagamentos em real e uma
                            navegação simples de verdade. <br /> Sem burocracia,
                            sem complicação: só o que funciona, do seu jeito.
                        </p>
                    </div>
                    <img
                        className="items-center mx-auto mt-12"
                        src="/build/assets/images/Group 1618873536.png"
                        alt=""
                    />
                </section>
                {/* Testimonials Section */}
                <section className="relative py-16 bg-gray-50 overflow-hidden">
                    {/* Purple gradient background element */}
                    {/* <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-400 to-purple-600 rounded-bl-full opacity-20"></div> */}

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Testimonials
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevTestimonial}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 duration-200"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 text-black" />
                            </button>

                            <button
                                onClick={handleNextTestimonial}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 text-black" />
                            </button>

                            {/* Testimonials Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8">
                                {testimonialCards.map((t, idx) => {
                                    let visibilityClass = "";
                                    if (idx > 0)
                                        visibilityClass = "hidden md:block"; // Show only first on sm
                                    if (idx > 1)
                                        visibilityClass = "hidden lg:block"; // Show only first two on md

                                    return (
                                        <div
                                            key={idx}
                                            className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 relative ${visibilityClass}`}
                                        >
                                            {/* Quote marks */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="text-4xl text-purple-400 font-bold leading-none">
                                                    "
                                                </div>
                                                <div className="text-4xl text-purple-400 font-bold leading-none">
                                                    "
                                                </div>
                                            </div>

                                            {/* Profile Section */}
                                            <div className="flex flex-col items-center mb-4">
                                                <img
                                                    src={t.image}
                                                    alt={t.name}
                                                    className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-gray-100"
                                                />
                                                <h3 className="font-semibold text-gray-900 text-center">
                                                    {t.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 text-center mt-1">
                                                    {t.role}
                                                </p>
                                            </div>

                                            {/* Star Rating */}
                                            <div className="flex justify-center mb-4">
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, index) => (
                                                        <Star
                                                            key={index}
                                                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                        />
                                                    ),
                                                )}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-gray-700 text-center leading-relaxed">
                                                {t.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ Section */}
                <section className="relative py-16 bg-gradient-to-br from-purple-50 via-gray-50 to-purple-100 overflow-hidden">
                    {/* Purple accent element */}
                    {/* <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-br from-purple-400 to-purple-600 opacity-30"></div> */}

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Perguntas frequentes
                            </h2>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-4">
                            {/* FAQ Item 1 - Expanded */}
                            {faqItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm"
                                >
                                    <button
                                        className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-200 rounded-2xl"
                                        onClick={() =>
                                            setOpenFaq(
                                                openFaq === idx ? -1 : idx,
                                            )
                                        }
                                        aria-expanded={openFaq === idx}
                                        aria-controls={`faq-panel-${idx}`}
                                    >
                                        <span className="text-lg font-medium text-gray-900 pr-4">
                                            {item.question}
                                        </span>
                                        {openFaq === idx ? (
                                            <Minus className="w-6 h-6 text-gray-600 flex-shrink-0" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-gray-600 flex-shrink-0" />
                                        )}
                                    </button>
                                    {openFaq === idx && (
                                        <div
                                            className="px-6 pb-6"
                                            id={`faq-panel-${idx}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Homepage;
