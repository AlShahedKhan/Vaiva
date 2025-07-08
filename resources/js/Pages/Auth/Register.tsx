import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen flex">
            {/* Custom Font Styles */}
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700;800;900&display=swap");
                @import url("https://fonts.googleapis.com/css2?family=Gilroy:wght@300;400;500;600;700&display=swap");

                .font-satoshi {
                    font-family:
                        "Satoshi",
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        Roboto,
                        sans-serif;
                }

                .font-gilroy {
                    font-family:
                        "Gilroy",
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        Roboto,
                        sans-serif;
                }
            `}</style>

            {/* Left Side - Registration Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h1 className="text-6xl font-satoshi font-semibold text-gray-900 mb-2">
                            S'inscrire
                        </h1>
                        <p className="text-gray-600 text-sm font-gilroy">
                            Rejoignez-Nous Aujourd'hui Remplissez Le Formulaire
                            Pour Commencer
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold font-satoshi text-gray-900 mb-6">
                                Créez votre compte
                            </h2>
                        </div>

                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium font-gilroy text-gray-700 mb-2"
                            >
                                Nom et prénom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Tapez Nom"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white font-gilroy"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium font-gilroy text-gray-700 mb-2"
                            >
                                Adresse email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="✉ Exemple"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white font-gilroy"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium font-gilroy text-gray-700 mb-2"
                            >
                                Mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="🔒 Mot de passe"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white font-gilroy"
                                    required
                                />
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium font-gilroy text-gray-700 mb-2"
                            >
                                Confirmer le mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="🔒 Mot de passe"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-white font-gilroy"
                                    required
                                />
                            </div>
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                            />
                            <label
                                htmlFor="rememberMe"
                                className="ml-2 text-sm font-gilroy text-gray-700"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-black text-white py-3 px-4 rounded-full font-medium font-gilroy hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - Purple Gradient with Content */}
            <div className="flex-1 bg-violet-600 flex p-8 m-6 rounded-2xl relative overflow-hidden">
                <div className="z-10 text-white ">
                    <div className="mb-8 w-[129px] h-[40.35px] opacity-100  top-[53px] left-[791px]">
                        <img src="/build/assets/images/Group 1.png" alt="" />
                    </div>

                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold font-satoshi leading-tight mb-4">
                            Conecte.
                            <br />
                            Combine.
                            <br />
                            Resolva.
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <img
                                src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10">
                            <img
                                src="/build/assets/images/image 29 (1) 2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
