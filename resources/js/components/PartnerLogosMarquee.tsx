// resources/js/components/PartnerLogosMarquee.tsx
import React from 'react';
import Marquee from 'react-fast-marquee';

interface PartnerLogosMarqueeProps {
    // You can add props here if you want to make speed, gradient, etc. customizable from parent
    // speed?: number;
    // gradient?: boolean;
}

const PartnerLogosMarquee: React.FC<PartnerLogosMarqueeProps> = () => {
    // Define your partner logos with image paths and alt text
    // These should be accessible from your public directory after 'npm run build' or 'yarn dev'
    const partnerLogos = [
        { src: "/build/assets/path4.png", alt: "Hering Logo" },
        { src: "/build/assets/path4.png", alt: "Brahma Logo" },
        { src: "/build/assets/path4.png", alt: "Bradesco Logo" },
        { src: "/build/assets/path4.png", alt: "Localiza Logo" },
        { src: "/build/assets/path4.png", alt: "O Boticário Logo" },
        { src: "/build/assets/path4.png", alt: "Hering Logo" }, // Duplicate for seamless scroll effect
        { src: "/build/assets/path4.png", alt: "Brahma Logo" },
        { src: "/build/assets/path4.png", alt: "Bradesco Logo" },
        { src: "/build/assets/path4.png", alt: "Localiza Logo" },
        { src: "/build/assets/path4.png", alt: "O Boticário Logo" },
    ]

    return (
        <section className="relative z-10 py-8 bg-purple-700">
            <Marquee
                gradient={false} // Set to true if you want a fade effect at the edges
                speed={40}       // Adjust speed as needed (lower is slower)
                pauseOnHover={true} // Pause animation on mouse hover
            >
                {partnerLogos.map((logo, index) => (
                    <img
                        key={index} // Use index as key if logos are static and their order doesn't change
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-10 md:h-10 lg:h-7 flex-shrink-0 object-contain mx-6 filter brightness-0 invert"
                    />
                ))}
            </Marquee>
        </section>
    );
};

export default PartnerLogosMarquee;
