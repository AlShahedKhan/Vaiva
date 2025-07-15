// resources/js/components/GraphicDesignServiceCard.tsx
import React from 'react';

interface VideoSectionProps {
    // You can add props here if you want to generalize this component for other service types
    // e.g., imageUrl: string; title: string; description: string; professionalsCount: number;
}

const VideoSection: React.FC<VideoSectionProps> = () => {
    return (
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 overfollow-x-hidden">
            <img
                src="/services/video-bg.png"
                alt="Background Image"
                className="absolute -bottom-56 -right-0 md:-right-0 w-64 h-64 md:w-auto md:h-auto lg:-bottom-130 lg:right-0 z-0"
            />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Image Section */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="/services/video.png"
                        alt="Designer gráfico trabalhando em um laptop"
                        className="w-full h-auto object-cover md:h-full rounded-l-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 w-full p-8 md:p-12 space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                        Edição de vídeo
                    </h2>
                    <p className="text-gray-700 text-lg text-center lg:text-left">
                        Transforme suas ideias em vídeos profissionais com a ajuda dos nossos editores especializados. Desde vídeos para redes sociais até produções corporativas, aqui você encontra quem entende do assunto.
                        Contratar um editor de vídeo na Vaiva é simples, rápido e seguro. Escolha o profissional ideal, combine os detalhes diretamente no chat e receba o trabalho no prazo.
                        Contratar um editor de vídeo
                    </p>
                    <button className="mt-4 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 w-full lg:w-fit transition-colors duration-200">
                        Contratar um editor de vídeo
                    </button>
                </div>
            </div>
            {/* Absolute positioning for the purple curve/element as seen in Screenshot_76.png */}
        </section>
    );
};

export default VideoSection;
