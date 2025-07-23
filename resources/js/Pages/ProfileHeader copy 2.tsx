import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header_Dashboard";
const uiImage = '/images/dashboard-service-ui.png';
const project1 = '/images/project1.png';

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

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
    children,
    user,
    notifications = 0,
    messages = 0,
}) => {
    const name = "Luiza Gomes";
    const title = "Designer Gráfico, Desenvolvedor Front-end";
    const location = "São Paulo, Brasil";
    const profileImage = '/images/person-profile.png'; // Static placeholder image
    const aboutMe = "Sou designer gráfico com mais de 4 anos de experiência em branding, UI/UX e design digital. Ajudo marcas a se destacarem com soluções visuais modernas e funcionais. Trabalho com ferramentas como Figma, Adobe Suite e Webflow. Meu foco é sempre entregar qualidade, pontualidade e inovação.";
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                                src={uiImage} // Replace with your actual image path
                                alt="Illustration depicting UI/UX design elements for social media logo creation"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                                <div className="flex justify-end space-x-3 text-gray-500">
                                    {/* Edit Icon */}
                                    <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                        </svg>
                                    </button>
                                    {/* Delete Icon */}
                                    <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={uiImage}  // Replace with your actual image path
                                alt="Illustration for a web development service, showing code snippets and a monitor"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                                <div className="flex justify-end space-x-3 text-gray-500">
                                    {/* Edit Icon */}
                                    <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                        </svg>
                                    </button>
                                    {/* Delete Icon */}
                                    <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                                <div className="flex justify-end space-x-3 text-gray-500">
                                    {/* Edit Icon */}
                                    <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                        </svg>
                                    </button>
                                    {/* Delete Icon */}
                                    <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img
                                src={uiImage}  // Replace with your actual image path
                                alt="Illustration depicting branding and identity design, with abstract shapes and colors"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Logo Para Redes Sociais</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold text-gray-900">R$ 150</span>
                                    <span className="text-sm text-purple-600 font-medium">Design Gráfico</span>
                                </div>
                                <div className="flex justify-end space-x-3 text-gray-500">
                                    {/* Edit Icon */}
                                    <button className="hover:text-purple-700 transition-colors duration-200" aria-label="Edit service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.187 1.187 3.712 3.712 1.187-1.187a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.334 2.625V20.25H2.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H4.5v-2.25h2.25v-2.25h2.25v-2.25H12l8.4-8.4Z" />
                                        </svg>
                                    </button>
                                    {/* Delete Icon */}
                                    <button className="hover:text-red-600 transition-colors duration-200" aria-label="Delete service">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.846 48.846 0 0 0-1.124.015c-1.48-.095-2.959-.15-4.44-.158l-2.007-.007a49.108 49.108 0 0 0-3.754.24M14.25 17.25h1.5v.75H14.25v-.75ZM11.25 17.25h1.5v.75h-1.5v-.75ZM9.75 17.25h-1.5v.75h1.5v-.75ZM19.5 4.5V6h-.75V4.5H15V3.75C15 3.336 14.664 3 14.25 3h-4.5c-.414 0-.75.336-.75.75V4.5H4.5V6h-.75V4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5ZM19.5 7.5v11.25c0 1.24-1.01 2.25-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18.75V7.5h15Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
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



                {/* Optional children rendering */}
                {children}
            </main>
        </div>
    );
};

export default ProfileHeader;
