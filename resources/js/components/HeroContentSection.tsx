// HeroContentSection.tsx
import React from 'react';
interface HeroContentSectionProps {

}
// Define any props if needed
const HeroContentSection: React.FC<HeroContentSectionProps> = () => {
    return (
        <section className='relative z-10'>
            <img
                src="/services/person-bg.png"
                alt="Background Image"
                className="absolute block md:hidden left-0 right-0  -top-20 -z-1 w-full"
            />
            <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 overflow-hidden flex items-center justify-center mx-3 rounded-2xl">
                {/* Content Container */}

                <div className="lg:container px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-30">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 text-center lg:text-left text-white max-w-xl lg:max-w-md xl:max-w-full py-2 md:py-20 lg:py-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center lg:text-left">
                            Redação
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-center lg:text-left">
                            Encontre redatores especializados que transformam ideias em palavras impactantes. Seja para blogs, artigos, conteúdos institucionais ou textos publicitários, você pode contratar profissionais prontos para criar com qualidade e rapidez.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-10 text-center lg:text-left">
                            Precisa de textos criativos, otimizados para SEO ou conteúdos que realmente conectem com seu público? Na Voiun, você acessa escritores qualificados que entregam exatamente o seu projeto precisa, no seu prazo e do seu jeito.
                        </p>
                        <button className="bg-white cursor-pointer text-purple-700 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300 w-full lg:w-fit">
                            Contratar Redator Agora
                        </button>
                    </div>

                    {/* Right Side: Image and Floating Cards */}
                    <div className="flex-1 flex flex-col pt-0 lg:pt-20">
                        <img
                            src="/services/card-new.png"
                            alt="Man working on laptop"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroContentSection;
