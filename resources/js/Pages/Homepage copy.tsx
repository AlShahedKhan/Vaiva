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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles

import { Head } from "@inertiajs/react";
import Footer from "../components/footer";
import Header from "../components/Header";
import PartnerLogosMarquee from "../components/PartnerLogosMarquee";

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    const carouselImages = [
        "/images/Group 1618873530.png",
        "/images/Group 1618873531.png",
        "/images/Group 1618873532.png",
        "/images/Group 1618873530.png",
        "/images/Group 1618873531.png",
        "/images/Group 1618873532.png",
        "/images/Group 1618873530.png",
        "/images/Group 1618873531.png",
        "/images/Group 1618873532.png",
    ];

    const carouselImages1 = [
        "/images/Group 1618873533.png",
        "/images/Group 1618873534.png",
        "/images/Group 1618873535.png",
        "/images/Group 1618873533.png",
        "/images/Group 1618873534.png",
        "/images/Group 1618873535.png",
        "/images/Group 1618873533.png",
        "/images/Group 1618873534.png",
        "/images/Group 1618873535.png",
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const testimonials = [
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "images/user profile.png",
            text: "Entregou rápido e ficou melhor do que eu imaginei. Voltarei a contratar com certeza.",
        },
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "images/user profile.png",
            text: "Tudo certinho, combinado pelo chat e entregue no prazo. Sem dor de cabeça.",
        },
        {
            name: "Elena Rossi",
            role: "Owner Seaview Boutique Hotel",
            image: "images/user profile.png",
            text: "Primeira vez usando a Vaiva e já resolveu meu problema. Muito prático.",
        },
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "images/user profile.png",
            text: "Entregou rápido e ficou melhor do que eu imaginei. Voltarei a contratar com certeza.",
        },
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "images/user profile.png",
            text: "Tudo certinho, combinado pelo chat e entregue no prazo. Sem dor de cabeça.",
        },
        {
            name: "Elena Rossi",
            role: "Owner Seaview Boutique Hotel",
            image: "images/user profile.png",
            text: "Primeira vez usando a Vaiva e já resolveu meu problema. Muito prático.",
        },
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "images/user profile.png",
            text: "Entregou rápido e ficou melhor do que eu imaginei. Voltarei a contratar com certeza.",
        },
        {
            name: "John Anderson",
            role: "February 2, 2024 Muito Obrigado",
            image: "images/user profile.png",
            text: "Tudo certinho, combinado pelo chat e entregue no prazo. Sem dor de cabeça.",
        },
        {
            name: "Elena Rossi",
            role: "Owner Seaview Boutique Hotel",
            image: "images/user profile.png",
            text: "Primeira vez usando a Vaiva e já resolveu meu problema. Muito prático.",
        },
    ];

    const faqItems = [
        {
            question: "Posso conversar com o profissional antes de contratar?",
            answer: "Lorem ipsum dolor sit amet consectetur. Volutpat id donec euismod eu eu risus. Quis sagittis nunc ultricies eu in est. Pretium leo arcu eget ultricies faucibus amet nunc. Sed quis quis vulputate volutpat purus. Facilisis et quis sit tincidunt ipsum. Convallis est consectetur commodo amet sed odio a. Sollicitudin laoreet adipiscing id semper vulputate. Morbi consequat gravida tincidunt.",
        },
        {
            question: "Como funciona o pagamento pela plataforma?",
            answer: "O pagamento na plataforma é seguro e simplificado. Após a conclusão do serviço e sua aprovação, o valor é liberado para o prestador. Você pode usar diversos métodos de pagamento, garantindo flexibilidade e segurança para suas transações. Todas as operações são protegidas para sua tranquilidade.",
        },
        {
            question: "Os profissionais são avaliados por outros usuários?",
            answer: "Sim, todos os profissionais na Vaiva são avaliados por outros usuários após a conclusão de cada serviço. Essas avaliações e comentários são visíveis em seus perfis, ajudando você a tomar decisões informadas ao contratar. Isso garante transparência e qualidade na nossa comunidade.",
        },
        {
            question: "A Vaiva tem aplicativo para celular?",
            answer: "Atualmente, a Vaiva é otimizada para ser acessada diretamente pelo navegador do seu celular, proporcionando uma experiência responsiva e completa. Estamos sempre trabalhando para melhorar e expandir nossas plataformas, e um aplicativo dedicado pode ser uma novidade futura!",
        },
        {
            question: "Como encontro um prestador de serviço?",
            answer: "Encontrar um prestador de serviço na Vaiva é fácil! Utilize nossa barra de pesquisa na página inicial, digitando a categoria ou o tipo de serviço que você precisa. Você também pode navegar pelas categorias e filtrar os resultados com base em avaliações, preço e localização para encontrar o profissional ideal para o seu projeto.",
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
                <Header
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                />

                {/* Hero Section */}
                <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-16">
                    {/* Background Image for all content */}
                    <div className="absolute -z-10 w-full h-210 sm:h-222 md:h-236 bg-no-repeat inset-0 pointer-events-none">
                        <img
                            src="images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-full pb-50 sm:pb-0 sm:-mb-24 md:pb-0"
                        />
                    </div>
                    <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight ">
                                    <span className="block sm:flex sm:space-x-3 sm:justify-center">
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
                            <img src="images/Mask group.png" alt="" />
                        </div>
                    </div>
                </main>

                {/* Featured Freelancers Section */}
                <section className="relative z-10 bg-white">
                    <div className="absolute right-0 -bottom-50 -z-1">
                        <img
                            src="images/Vaiva_elemento-2_fundo-roxo.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <PartnerLogosMarquee />

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
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

                        {/* Updated Carousel for Featured Freelancers */}
                        <div className="relative flex items-center justify-center gap-4 mb-12">
                            {/* Navigation Button for Previous */}
                            <div className="swiper-button-prev-1 absolute left-0 sm:left-[-30px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer hidden sm:block">
                                <ChevronLeft className="w-6 h-6 text-gray-700" />
                            </div>

                            <div className="overflow-hidden flex-1 w-full max-w-full lg:max-w-6xl mx-auto">
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={20} // Space between cards
                                    slidesPerView={'auto'} // Show 'auto' slides (for partial visibility)
                                    centeredSlides={true} // Center the active slide
                                    navigation={{
                                        nextEl: '.swiper-button-next-1',
                                        prevEl: '.swiper-button-prev-1',
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2, // 2 images per row for medium screens
                                            centeredSlides: false, // Don't center for larger views
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 3, // 3 images per row for large screens
                                            centeredSlides: false,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    className="mySwiper" // Add a class for potential custom CSS
                                >
                                    {carouselImages.map((src, idx) => (
                                        <SwiperSlide key={idx} className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                                            <img
                                                src={src}
                                                alt={`carousel-image-${idx}`}
                                                className="object-contain mx-auto rounded-xl h-full w-full"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Navigation Button for Next */}
                            <div className="swiper-button-next-1 absolute right-0 sm:right-[-30px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer hidden sm:block">
                                <ChevronRight className="w-6 h-6 text-gray-700" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Platform Services Section (Updated to match the above) */}
                <section className="relative z-10 py-16 bg-[#1E1845] mx-4 rounded-t-2xl mt-32 md:mt-16 sm:mt-12">
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

                        {/* Updated Carousel for Platform Services */}
                        <div className="relative flex items-center justify-center gap-4 mb-12">
                            {/* Navigation Button for Previous */}
                            <div className="swiper-button-prev-2 absolute left-0 sm:left-[-30px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer hidden sm:block">
                                <ChevronLeft className="w-6 h-6 text-gray-700" />
                            </div>

                            <div className="overflow-hidden flex-1 w-full max-w-full lg:max-w-6xl mx-auto">
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={'auto'}
                                    centeredSlides={true}
                                    navigation={{
                                        nextEl: '.swiper-button-next-2',
                                        prevEl: '.swiper-button-prev-2',
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            centeredSlides: false,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            centeredSlides: false,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    className="mySwiper"
                                >
                                    {carouselImages1.map((src, idx) => (
                                        <SwiperSlide key={idx} className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                                            <img
                                                src={src}
                                                alt={`carousel-image-${idx}`}
                                                className="object-contain mx-auto rounded-xl h-full w-full"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Navigation Button for Next */}
                            <div className="swiper-button-next-2 absolute right-0 sm:right-[-30px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer hidden sm:block">
                                <ChevronRight className="w-6 h-6 text-gray-700" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Bar */}
                <PartnerLogosMarquee />
                <section className="relative lg:pb-40 overflow-hidden">
                    <div className="mt-24 text-center">
                        <h1 className="text-5xl font-bold sm:text-4xl">
                            A Vaiva nasceu pra facilitar a vida <br /> de quem
                            contrata e de quem <br /> oferece serviços digitais.
                        </h1>
                        <p className="mt-8 text-gray-600"> {/* Changed text-gray-600 from #D9D9D9 for better contrast */}
                            Tudo em português, com pagamentos em real e uma
                            navegação simples de verdade. <br /> Sem burocracia,
                            sem complicação: só o que funciona, do seu jeito.
                        </p>
                    </div>

                    {/* Image first */}
                    <img
                        className="items-center mx-auto mt-12 relative z-10"
                        src="images/Group 1618873536.png"
                        alt=""
                    />

                    {/* Purple block shown *under* the image */}
                    <div
                        style={{ transform: "rotate(-2deg)" }}
                        className="bg-[#7E54F7] h-76 lg:h-40 md:h-96 relative z-1 -mt-66 lg:-top-34 md:-mt-78"
                    ></div>
                    <img
                        style={{ transform: "rotate(-15deg)" }}
                        className="absolute z-0 right-0 bottom-0 lg:-bottom-31 hidden lg:block max-w-full h-auto"
                        src="images/Vaiva_elemento-3_fundo-branco.png"
                        alt="bg image"
                    />
                </section>

                {/* Testimonials Section */}
                <section className="relative py-16 bg-gray-50 overflow-hidden mt-5 md:pt-30">
                    <div className="max-w-7xl mx-auto px-4 lg:mt-6 sm:px-6 md:-mt-16 lg:px-8 md:py-0">
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Testimonials
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Testimonials Swiper */}
                            <Swiper
                                modules={[Navigation]} // Enable Navigation
                                spaceBetween={24} // Space between testimonial cards
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-button-next-testimonials',
                                    prevEl: '.swiper-button-prev-testimonials',
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1, // 1 testimonial for small screens
                                    },
                                    768: {
                                        slidesPerView: 2, // 2 testimonials for medium screens
                                    },
                                    1024: {
                                        slidesPerView: 3, // 3 testimonials for large screens
                                    },
                                }}
                                loop={true}
                            >
                                {testimonials.map((t, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div
                                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 relative h-full flex flex-col justify-between"
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
                                    </SwiperSlide>
                                ))}
                                {/* Custom Navigation Buttons for Testimonials */}
                                <div className="swiper-button-prev-testimonials absolute left-0 sm:left-[-30px] lg:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                                </div>
                                <div className="swiper-button-next-testimonials absolute right-0 sm:right-[-30px] lg:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                                    <ChevronRight className="w-6 h-6 text-gray-700" />
                                </div>
                            </Swiper>
                        </div>
                        <img
                            style={{ transform: "rotate(-180deg)" }}
                            className="absolute z-0 left-0 -bottom-71 hidden lg:block max-w-full h-auto"
                            src="images/Vaiva_elemento-3_fundo-branco.png"
                            alt="bg image"
                        />
                    </div>
                </section>
                {/* FAQ Section */}
                <section className="relative py-16 bg-gradient-to-br from-purple-50 via-gray-50 to-purple-100 overflow-hidden">
                    <div className="max-w-4xl mx-auto lg:mb-18 px-4 sm:px-6 lg:px-8 relative z-10 md:-mt-12 sm:-mt-6">
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Perguntas frequentes
                            </h2>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-4">
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
                <Footer />
            </div>
        </>
    );
};

export default Homepage;
