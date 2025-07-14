// resources/js/components/PartnerLogosMarquee.tsx
import React from 'react';
import Marquee from 'react-fast-marquee';
const Partner1 = '/build/assets/images/marque/1.png'
const Partner2 = '/build/assets/images/marque/2.png'
const Partner3 = '/build/assets/images/marque/3.png'
const Partner4 = '/build/assets/images/marque/4.png'
const Partner5 = '/build/assets/images/marque/5.png'
const Partner6 = '/build/assets/images/marque/6.png'

interface PartnerLogosMarqueeProps {
    // You can add props here if you want to make speed, gradient, etc. customizable from parent
    // speed?: number;
    // gradient?: boolean;
}

const PartnerLogosMarquee: React.FC<PartnerLogosMarqueeProps> = () => {
    // Define your partner logos with image paths and alt text
    // These should be accessible from your public directory after 'npm run build' or 'yarn dev'
    const partnerLogos = [
        { src: Partner1, alt: "Vivo Logo" },
        { src: Partner2, alt: "Hering Logo" },
        { src: Partner3, alt: "Brahma Logo" },
        { src: Partner4, alt: "Bradesco Logo" },
        { src: Partner5, alt: "Localiza Logo" },
        { src: Partner6, alt: "O Boticário Logo" },
        { src: Partner1, alt: "Vivo Logo" },
        { src: Partner2, alt: "Hering Logo" },
        { src: Partner3, alt: "Brahma Logo" },
        { src: Partner4, alt: "Bradesco Logo" },
        { src: Partner5, alt: "Localiza Logo" },
        { src: Partner6, alt: "O Boticário Logo" },
    ]

    return (
        <section className="relative z-10 py-8 bg-purple-700">
            <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
                className="w-full" // <-- Add this
            >

                {partnerLogos.map((logo, index) => (
                    <img
                        key={index} // Use index as key if logos are static and their order doesn't change
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-10 md:h-10 lg:h-7 object-cover mx-6 filter brightness-0 invert"
                    />
                ))}
            </Marquee>
        </section>
    );
};

export default PartnerLogosMarquee;
