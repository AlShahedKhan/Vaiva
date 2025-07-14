// resources/js/components/Footer.tsx
import React from 'react';
import { ArrowRight, Linkedin, Facebook, Instagram } from 'lucide-react';
const Footer_bg = '/build/assets/footer/footer-bg.png'; // Adjust the path as necessary
const Footer_person = '/build/assets/footer/foot-person.png'; // Adjust the path as necessary
interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <>
            {/* "Can I talk to the professional before hiring?" section */}
            <section
                className="relative w-fit m-auto rounded-[40px] mb-5 text-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:p-15 z-99"
                style={{
                    backgroundImage: `url(${Footer_bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                {/* Background image for this specific section */}

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row  w-full">
                    {/* Text content */}
                    <div className="md:w-1/2 pr-0 md:pr-16 mb-8 md:mb-0 p-8 text-center lg:text-left lg:p-0">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ">
                            Posso conversar com o profissional antes de contratar?
                        </h2>
                        <button className="flex text-center m-auto lg:m-0 items-center px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200">
                            Comece agora
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>

                    <div className="md:w-1/2 w-ful relative">
                        <img
                            src={Footer_person}
                            alt="Designer gráfico trabalhando em um laptop"
                            className="z-999999 w-full h-auto object-contain md:h-full rounded-l-xl lg:relative xl:absolute"
                            style={{
                                top: '-135px',
                                height: '500px',
                                bottom: '0',
                                right: '0',
                            }}
                        />
                    </div>
                </div>
            </section>


            {/* Main Footer Content */}
            <footer className="bg-white py-12 text-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Vaiva Branding */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            {/* Using the new logo image path */}
                            <img src="/build/assets/footer/logo-footer.png" alt="Vaiva Logo" className="h-8" />
                        </div>
                        <p className="text-sm">
                            Plataforma brasileira, feita pra facilitar a vida de quem oferece e de quem precisa de serviços digitais.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-2xl">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px] text-2xl">Browse Services</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Post a Project</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">How It Works</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Pricing</a></li>
                        </ul>
                    </div>

                    {/* For Freelancers */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-2xl">For Freelancers</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Create Profile</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Find Work</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Freelancer Guide</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Membership Plans</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-2xl">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* App Downloads */}
                    <div className="flex flex-col items-end">
                        <img src="/build/assets/footer/apple.png" alt="Download on the App Store" className="w-fit cursor-pointer mb-3" />
                        <img src="/build/assets/footer/google.png" alt="Get it on Google Play" className="w-fit cursor-pointer" />
                    </div>
                </div>

                {/* Copyright and Social Icons */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Vaiva. Todos os direitos reservados.
                    </p>
                    <div className="flex space-x-4">
                        {/* Using Lucide React Icons for social media */}
                        <a href="#" aria-label="LinkedIn" className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-purple-600 text-[#838099] text-[16px] hover:border-purple-600 transition-colors duration-200">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" aria-label="Facebook" className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-purple-600 text-[#838099] text-[16px] hover:border-purple-600 transition-colors duration-200">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" aria-label="Instagram" className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-purple-600 text-[#838099] text-[16px] hover:border-purple-600 transition-colors duration-200">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
