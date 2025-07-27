// resources/js/components/Footer.tsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, Linkedin, Facebook, Instagram } from 'lucide-react';
const FooterBg = '/footer/footer-bg.png';
const FooterPerson = '/footer/foot-person.png';
const FooterLogo = '/footer/logo-footer.png';
interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <>
            {/* "Can I talk to the professional before hiring?" section */}
            <section
                className="relative w-fit  rounded-3xl lg:rounded-4xl mb-5 text-white flex flex-col md:flex-row items-center justify-center z-99 m-3 lg:m-auto"
                style={{
                    backgroundImage: `url(${FooterBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                {/* Background image for this specific section */}

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row w-full">
                    {/* Text content */}
                    <div className="lg:w-1/2 mb-8 md:mb-0 p-8 text-center lg:text-left lg:p-14 lg:pr-0">
                        <h2 className="text-4xl lg:text-6xl font-bold leading-10 lg:leading-16 mb-6 ">
                            Posso conversar com o profissional antes de contratar?
                        </h2>
                        <button className="flex justify-center w-full items-center px-8 py-4 text-white text-sm border-1 border-clor rounded-full font-medium transition-colors duration-200 m-auto lg:ml-0 lg:w-auto">
                            Comece agora
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>

                    <div className="lg:w-1/2 w-ful relative">
                        <img
                            src={FooterPerson}
                            alt="Designer gráfico trabalhando em um laptop"
                            className="z-999999 w-full h-full object-contain md:h-full rounded-l-xl lg:relative xl:absolute lg:h-[500px]"
                            style={{
                                top: '-117px',
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
                        <Link href='/' className="flex items-center space-x-2 mb-4">
                            {/* Using the new logo image path */}
                            <img src={FooterLogo} alt="Vaiva Logo" className="h-8 m-auto lg:ml-0" />
                        </Link>
                        <p className="text-lg text-center lg:text-left text-[#838099]">
                            Plataforma brasileira, feita pra facilitar a vida de quem oferece e de quem precisa de serviços digitais.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-2xl text-center lg:text-left ">Quick Links</h3>
                        <ul className="space-y-4 text-sm flex flex-col items-center lg:items-start">
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Browse Services</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Post a Project</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">How It Works</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Pricing</a></li>
                        </ul>
                    </div>

                    {/* For Freelancers */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-2xl text-center lg:text-left ">For Freelancers</h3>
                        <ul className="space-y-4 text-sm flex flex-col items-center lg:items-start">
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Create Profile</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Find Work</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Freelancer Guide</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Membership Plans</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-2xl text-center lg:text-left ">Company</h3>
                        <ul className="space-y-4 text-sm flex flex-col items-center lg:items-start">
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-600 text-[#838099] text-[16px]">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* App Downloads */}
                    <div className="flex flex-col items-center lg:items-end">
                        <img src="/footer/apple.png" alt="Download on the App Store" className="w-fit mb-3 cursor-pointer" />
                        <img src="/footer/google.png" alt="Get it on Google Play" className="w-fit cursor-pointer" />
                    </div>
                </div>

                {/* Copyright and Social Icons */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t border-black">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Vaiva. Todos os direitos reservados.
                    </p>
                    <div className="flex space-x-4">
                        {/* Using Lucide React Icons for social media */}
                        <a href="#" aria-label="LinkedIn" className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:text-purple-600 text-[#838099] text-[16px] hover:border-purple-600 transition-colors duration-200">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" aria-label="Facebook" className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:text-purple-600 text-[#838099] text-[16px] hover:border-purple-600 transition-colors duration-200">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" aria-label="Instagram" className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center  hover:text-purple-600 text-[#838099] text-[16px] hover:border-purple-600 transition-colors duration-200">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
