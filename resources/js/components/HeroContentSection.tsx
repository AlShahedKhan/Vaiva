// HeroContentSection.tsx
import React from 'react';
interface HeroContentSectionProps {

}
// Define any props if needed
const HeroContentSection: React.FC<HeroContentSectionProps> = () => {
    return (
        <section className="relative z-99 bg-gradient-to-br from-gray-900 to-purple-900 overflow-hidden flex items-center justify-center py-2 md:py-20 lg:py-20 mx-3 rounded-2xl">
            {/* Content Container */}
            <div className="container px-4 relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 sm:py-10">
                {/* Left Side: Text Content */}
                <div className="flex-1 text-center lg:text-left text-white max-w-xl lg:max-w-md xl:max-w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Redação
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                        Encontre redatores especializados que transformam ideias em palavras impactantes. Seja para blogs, artigos, conteúdos institucionais ou textos publicitários, você pode contratar profissionais prontos para criar com qualidade e rapidez.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed mb-10">
                        Precisa de textos criativos, otimizados para SEO ou conteúdos que realmente conectem com seu público? Na Voiun, você acessa escritores qualificados que entregam exatamente o seu projeto precisa, no seu prazo e do seu jeito.
                    </p>
                    <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300">
                        Contratar Redator Agora
                    </button>
                </div>

                {/* Right Side: Image and Floating Cards */}
                <div className="flex-1 flex justify-center lg:justify-end relative h-auto">
                    {/* Main Image */}
                    {/* Replace this with your actual image path or a public URL */}
                    <img
                        src="/build/assets/services/card-new.png" // Placeholder image - **Replace with your image URL**
                        alt="Man working on laptop"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroContentSection;
