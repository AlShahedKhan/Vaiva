// resources/js/components/GraphicDesignServiceCard.tsx
import React from 'react';

interface GraphicDesignServiceCardProps {
    // You can add props here if you want to generalize this component for other service types
    // e.g., imageUrl: string; title: string; description: string; professionalsCount: number;
}

const GraphicDesignServiceCard: React.FC<GraphicDesignServiceCardProps> = () => {
    return (
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <img
                src="/build/assets/services/person-bg.png"
                alt="Background Image"
                className="absolute -bottom-30 -right-0 md:-bottom-124 md:-right-0 w-64 h-64 md:w-auto md:h-auto lg:-bottom-80 lg:right-0 z-0"
            />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-5">
                {/* Image Section */}
                <div className="md:w-1/2 w-full order-2 lg:order-1 z-99">
                    <img
                        src="/build/assets/services/person.png" // Replace with your actual image path
                        alt="Designer gráfico trabalhando em um laptop"
                        className="w-full h-auto object-cover md:h-full rounded-l-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 w-full lg:p-8 mt-0 lg:mt-20 space-y-6 order-1 lg:order-2">
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                        Design Gráfico
                    </h2>
                    <p className="text-gray-700 text-lg text-center lg:text-left">
                        Transforme suas ideias em artes visuais incríveis com a ajuda de nossos
                        designers gráficos experientes. Desde logotipos profissionais até posts
                        criativos para redes sociais, você encontra aqui o talento certo para dar vida
                        ao seu projeto.
                    </p>
                    <p className="text-gray-600 text-base text-center lg:text-left">
                        Com **253 profissionais disponíveis**, você pode escolher entre especialistas
                        em branding, criação de identidade visual, design para web, impressos e
                        muito mais. Encontre o designer perfeito para o que você precisa, de forma
                        rápida e segura.
                    </p>
                    <button className="mt-4 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 w-full lg:w-fit transition-colors duration-200">
                        Contratar um Designer
                    </button>
                </div>
            </div>
            {/* Absolute positioning for the purple curve/element as seen in Screenshot_76.png */}
        </section>
    );
};

export default GraphicDesignServiceCard;
