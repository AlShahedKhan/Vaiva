// resources/js/Pages/Services.tsx
"use client"

import React from "react"
import { Search } from "lucide-react"
import Header from "../components/Header";
import PartnerLogosMarquee from "../components/PartnerLogosMarquee"
import GraphicDesignServiceCard from "../components/GraphicDesignServiceCard"
import HeroContentSection from '../components/HeroContentSection';
import VideoSection from '../components/VideoSection';
import Footer from "../components/footer"

type ServicesProps = {}

const Services: React.FC<ServicesProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    // Define your partner logos with image paths and alt text


    return (
        <>
            {/* Header Component */}
            <Header isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

            <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 relative">
                <section className="relative z-10 py-16 md:py-24 text-center px-4 sm:px-6 lg:px-0 overflow-hidden">
                    <div className="absolute -z-10  lg:h-[700px]  bg-no-repeat inset-0 pointer-events-none">
                        <img
                            src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold text-gray-900 leading-tight">
                            Explore Nossos Serviços
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Conecte-se rapidamente com profissionais prontos para ajudar no que você precisa.
                        </p>
                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <input
                                type="text"
                                placeholder="Encontre o que você está buscando aqui!"
                                className="w-full pl-4 pr-12 py-3 rounded-full border bg-white border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm transition-colors duration-200"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200">
                                <Search className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                </section>
                {/* Partner Logos Section using the new component */}
                <PartnerLogosMarquee /> {/* Use the component here */}
                {/* Graphic Design Service Card Section using the new component */}
                <GraphicDesignServiceCard />
                <HeroContentSection />
                <VideoSection />
                {/* footer of the website  */}
                <Footer />




                {/* If you wish to add more sections later, they would go here */}
            </div>
        </>
    )
}

export default Services
