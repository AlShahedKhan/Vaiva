"use client";

import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";

// Image paths
const uiImage = '/images/dashboard-service-ui.png';
const project1 = '/images/project1.png';
const profileImage = '/images/person-profile.png'; // Static placeholder image
const testimonialqouteImg = '/images/quote.png';

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

interface Order {
    service: string;
    freelancer: string;
    status: 'In Progress' | 'Completed' | 'Canceled';
    price: string;
}

interface ProfileHeaderProps {
    children?: React.ReactNode;
    user?: User | null;
    notifications?: number;
    messages?: number;
}

// Star SVG Component for consistent styling
const Star = ({ className = "" }) => (
    <svg
        className={`w-5 h-5 ${className}`} // Adjusted size to match screenshot better
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
);

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    children,
    user,
    notifications = 0,
    messages = 0,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Original carousel images and logic (kept as provided by user, though not directly used in testimonial section)
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [logoIndex, setLogoIndex] = useState(0);
    const [carouselImages, setCarouselImages] = useState([
        "/images/Group 1618873530.png",
        "/images/Group 1618873531.png",
        "/images/Group 1618873532.png",
    ]);
    const [carouselImages1, setCarouselImages1] = useState([
        "/images/Group 1618873533.png",
        "/images/Group 1618873534.png",
        "/images/Group 1618873535.png",
    ]);

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

    // Testimonials data (as provided by user)
    const initialTestimonials = [
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
            name: "James Robert",
            role: "New York",
            image: "https://placehold.co/48x48/FF5733/ffffff?text=JR", // Placeholder for James Robert
            text: "Excelente Profissional! Entregou O Logotipo Antes Do Prazo E Com Qualidade Incrível. Super Recomendo",
        },
        {
            name: "Mark T.",
            role: "New York",
            image: "https://placehold.co/48x48/33FF57/ffffff?text=MT", // Placeholder for Mark T.
            text: "Trabalho Impecável! Atencioso, Rápido E Com Excelente Comunicação. Vou Contratar Novamente Com Certeza.",
        },
        {
            name: "Daniel R.",
            role: "New York",
            image: "https://placehold.co/48x48/5733FF/ffffff?text=DR", // Placeholder for Daniel R.
            text: "Muito Satisfeita Com O Resultado Final. Superou Todas As Expectativas!",
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
            name: "James Robert",
            role: "New York",
            image: "https://placehold.co/48x48/FF5733/ffffff?text=JR", // Placeholder for James Robert
            text: "Excelente Profissional! Entregou O Logotipo Antes Do Prazo E Com Qualidade Incrível. Super Recomendo",
        },
        {
            name: "Mark T.",
            role: "New York",
            image: "https://placehold.co/48x48/33FF57/ffffff?text=MT", // Placeholder for Mark T.
            text: "Trabalho Impecável! Atencioso, Rápido E Com Excelente Comunicação. Vou Contratar Novamente Com Certeza.",
        },
        {
            name: "Daniel R.",
            role: "New York",
            image: "https://placehold.co/48x48/5733FF/ffffff?text=DR", // Placeholder for Daniel R.
            text: "Muito Satisfeita Com O Resultado Final. Superou Todas As Expectativas!",
        },
    ];

    const [testimonialCards, setTestimonialCards] = useState(initialTestimonials);
    const [testimonialIndex, setTestimonialIndex] = useState(0); // Keeping this for the manual shift logic

    // Drag states for testimonials
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const startTranslateRef = useRef(0);

    // Determine how many cards to show based on screen size
    const getCardsToShow = () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            return 3;
        } else if (window.innerWidth >= 768) { // md breakpoint
            return 2;
        } else { // default for small screens
            return 1;
        }
    };

    const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

    // Update cardsToShow on window resize
    useEffect(() => {
        const handleResize = () => {
            setCardsToShow(getCardsToShow());
            // Reset current index to ensure it's valid for the new number of cards
            setCurrentIndex(0); // This will re-snap the slider
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Manual navigation functions for testimonials (as provided by user)
    const handlePrevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex - 1 + initialTestimonials.length) % initialTestimonials.length);
    };

    const handleNextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % initialTestimonials.length);
    };

    // Autoplay for testimonials (re-implemented for manual shift logic)
    const autoplayIntervalRef = useRef(null);
    useEffect(() => {
        autoplayIntervalRef.current = setInterval(() => {
            handleNextTestimonial();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(autoplayIntervalRef.current); // Cleanup on component unmount
    }, [testimonialIndex]); // Dependency on testimonialIndex to re-trigger if index changes


    // Handle pointer (mouse/touch) interactions for dragging
    const handlePointerDown = (e) => {
        pauseAutoplay(); // Pause autoplay when user starts interacting
        setIsDragging(true);
        setStartX(e.clientX || e.touches[0].clientX);
        // Store initial translate for drag calculation, based on current snapped position
        startTranslateRef.current = -testimonialIndex * (100 / cardsToShow);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;

        const currentX = e.clientX || e.touches[0].clientX;
        const diffX = currentX - startX;
        // Calculate new translate percentage based on drag distance relative to screen width
        const newTranslate = startTranslateRef.current + (diffX / window.innerWidth) * 100;
        setCurrentTranslate(newTranslate);
    };

    const handlePointerUp = (e) => {
        setIsDragging(false);
        const endX = e.clientX || e.changedTouches[0].clientX;
        const diffX = endX - startX;
        // Calculate threshold based on a percentage of a single card's width
        const cardPixelWidth = (window.innerWidth / cardsToShow);
        const threshold = 0.2 * cardPixelWidth; // 20% of one card's width as drag threshold

        let newIndex = testimonialIndex;
        if (diffX > threshold) {
            // Swiped right (to previous testimonial)
            newIndex = (testimonialIndex - 1 + initialTestimonials.length) % initialTestimonials.length;
        } else if (diffX < -threshold) {
            // Swiped left (to next testimonial)
            newIndex = (testimonialIndex + 1) % initialTestimonials.length;
        }

        setTestimonialIndex(newIndex);
        startAutoplay(); // Resume autoplay after interaction
    };

    // This useEffect ensures the slider snaps to the correct position after a slide change (manual or autoplay)
    useEffect(() => {
        // Calculate the snapped position based on testimonialIndex and cardsToShow
        setCurrentTranslate(-testimonialIndex * (100 / cardsToShow));
    }, [testimonialIndex, cardsToShow]); // Re-run if testimonialIndex or cardsToShow changes

    // Function to start autoplay
    const startAutoplay = () => {
        clearInterval(autoplayIntervalRef.current); // Clear any existing interval
        autoplayIntervalRef.current = setInterval(() => {
            handleNextTestimonial();
        }, 5000); // Change slide every 5 seconds
    };

    // Function to pause autoplay
    const pauseAutoplay = () => {
        clearInterval(autoplayIntervalRef.current);
    };


    const name = "Luiza Gomes";
    const title = "Designer Gráfico, Desenvolvedor Front-end";
    const location = "São Paulo, Brasil";
    const aboutMe = "Sou designer gráfico com mais de 4 anos de experiência em branding, UI/UX e design digital. Ajudo marcas a se destacarem com soluções visuais modernas e funcionais. Trabalho com ferramentas como Figma, Adobe Suite e Webflow. Meu foco é sempre entregar qualidade, pontualidade e inovação.";

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {/* Sidebar */}
            <Sidebar
                notifications={notifications}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <Header
                    user={user}
                    notifications={notifications}
                    messages={messages}
                    onMenuButtonClick={() => setIsSidebarOpen(true)}
                />
                <div className="bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
                    <div className="relative w-full rounded-2xl overflow-hidden">
                        {/* Header Section (Purple Background) */}
                        <div className="bg-purple-700 p-6 sm:p-8 md:p-10 relative flex flex-col sm:flex-row items-center rounded-2xl sm:items-end gap-4 sm:gap-6">
                            {/* Profile Image - positioned absolutely on desktop, part of flow on mobile */}
                            <div className="absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:translate-y-0 sm:ml-4 sm:mr-0 z-10 w-40 h-40 rounded-full border-4 border-white shadow-lg flex-shrink-0 bg-gray-200 overflow-hidden">
                                <img src={profileImage} alt={`${name}'s profile`} className="w-full h-full object-cover" />
                            </div>

                            {/* Content beside the image */}
                            <div className="mt-[70px] sm:mt-0 flex flex-col items-center sm:items-start text-white text-center sm:text-left z-0">
                                <div className="flex justify-center items-center">
                                    <h1 className="text-2xl sm:text-3xl font-bol">{name}</h1>
                                    <div className="flex">
                                        {/* Hardcoded 5 filled stars */}
                                        <span className="text-yellow-400 text-lg">★</span>
                                        <span className="text-yellow-400 text-lg">★</span>
                                        <span className="text-yellow-400 text-lg">★</span>
                                        <span className="text-yellow-400 text-lg">★</span>
                                        <span className="text-yellow-400 text-lg">★</span>
                                    </div>
                                </div>
                                <p className="text-base sm:text-lg mb-1">{title}</p>
                                <p className="text-sm sm:text-base mb-4">{location}</p>
                                <button className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition duration-300">
                                    Contratar Agora
                                </button>
                            </div>
                        </div>

                        {/* "Sobre Mim" Section */}
                        <div className="py-6 sm:py-8 md:py-10 pt-20 sm:pt-16 md:pt-16"> {/* Adjusted top padding to account for image */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {aboutMe}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Meus Serviços</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={uiImage}  // Replace with your actual image path
                                alt="Illustration for mobile app development service, showing a smartphone with app interfaces"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 cursor-pointer transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 cursor-pointer transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={uiImage}  // Replace with your actual image path
                                alt="Illustration for mobile app development service, showing a smartphone with app interfaces"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 cursor-pointer transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 cursor-pointer transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={uiImage}  // Replace with your actual image path
                                alt="Illustration for mobile app development service, showing a smartphone with app interfaces"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 cursor-pointer transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 cursor-pointer transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={uiImage}  // Replace with your actual image path
                                alt="Illustration for mobile app development service, showing a smartphone with app interfaces"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                    <div className="flex justify-end space-x-3 text-gray-500">
                                        {/* Edit Icon */}
                                        <button className="hover:text-purple-700 cursor-pointer transition-colors duration-200" aria-label="Edit service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                            </svg>
                                        </button>
                                        {/* Delete Icon */}
                                        <button className="hover:text-red-600 cursor-pointer transition-colors duration-200" aria-label="Delete service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-8">Portfólio mim</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={project1} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={project1} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={project1} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={project1} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={project1} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <img
                                src={project1} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </div>

                {/* Testimonials Section - Now using original logic with design matched to screenshot */}
                <section className="relative py-16 bg-gray-50 overflow-hidden">
                    <div className="max-w-7xl px-4 lg:mt-6 sm:px-6 md:-mt-16 lg:px-8 md:py-0 relative z-10">
                        {/* Section Title */}
                        <div className="text-left mb-3">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Avaliações de Clientes
                            </h2>
                        </div>

                        {/* Testimonials Grid - Now manually controlled for display and autoplay */}
                        <div
                            className="relative overflow-hidden"
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerLeave={() => { // Handle case where pointer leaves the element while dragging
                                if (isDragging) {
                                    setIsDragging(false);
                                    // Snap back to current slide's position if drag ends outside
                                    setCurrentTranslate(-testimonialIndex * (100 / cardsToShow));
                                    startAutoplay(); // Resume autoplay
                                }
                            }}
                            style={{ touchAction: 'pan-y' }} // Allows vertical scrolling, prevents default horizontal swipe
                        >
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(${currentTranslate}%)`,
                                    transitionDuration: isDragging ? '0ms' : '500ms' // No transition during drag, smooth snap after
                                }}
                            >
                                {testimonialCards.map((t, idx) => (
                                    <div
                                        key={idx}
                                        // flex-none ensures items don't shrink, responsive widths for 1, 2, or 3 items
                                        className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
                                    >
                                        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-4">
                                                {/* Quote Icon - Top Left */}
                                                <img src={testimonialqouteImg} alt="image" />
                                                {/* Star Rating - Top Right */}
                                                <div className="flex items-center text-yellow-400">
                                                    {Array.from({ length: 5 }, (_, index) => (
                                                        <Star key={index} className="fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                    <span className="ml-1 text-gray-600 text-sm font-semibold">5.0</span>
                                                </div>
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-gray-700 text-base mb-6 flex-grow">
                                                {t.text}
                                            </p>

                                            {/* User Info - Bottom Left */}
                                            <div className="flex items-center mt-auto">
                                                <img
                                                    src={t.image}
                                                    alt={t.name}
                                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = `https://placehold.co/48x48/aabbcc/ffffff?text=${t.name.charAt(0)}`;
                                                    }}
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{t.name}</p>
                                                    <p className="text-gray-500 text-sm">{t.role}</p> {/* Using t.role as location/date */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Background element - bottom left, rotated, as seen in screenshot */}
                </section>

                {/* Optional children rendering */}
                {children}
            </main>
        </div>
    );
};

export default ProfileHeader;
