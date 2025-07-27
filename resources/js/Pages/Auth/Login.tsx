"use client";

import React, { useEffect, useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const Login = () => {
    const [flash, setFlash] = useState<{ type: string; message: string } | null>(null);
    // useForm থেকে data, setData, post, processing, errors, reset ডিস্ট্রাকচার করা হয়েছে
    const { data, setData, post, processing, errors, reset } =
        useForm<LoginFormData>({
            email: "",
            password: "",
            rememberMe: false,
        });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setData(
            name as keyof LoginFormData,
            type === "checkbox" ? checked : value,
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post("/login", {
            onFinish: () => reset("password"),
            // লগইন সফল হলে এখানেও একটি টোস্ট দেখাতে পারেন, তবে Laravel থেকে রিডাইরেক্ট হলে
            // flash মেসেজটি নতুন পেজে যাবে, তাই এখানে প্রয়োজন নাও হতে পারে।
            // onSuccess: () => {
            //     toast.success('Login successful!');
            // },
            // onError: () => {
            //     toast.error('Login failed. Please check your credentials.');
            // }
        });
    };

    const handleGoogleLogin = async () => {
        setData('processing', true);

        try {
            window.location.href = '/login/google';
        } catch (error) {
            setData('processing', false);
        }
    };

    const handleFacebookLogin = () => {
        setData('processing', true);
        window.location.href = "/login/facebook";
        setFlash({
            type: 'success',
            message: 'Facebook User Logged in Successfully!',
        });
    };

    return (

        <main className="h-screen flex flex-col md:flex-row overflow-y-auto sm:overflow-y-auto md:overflow-hidden lg:overflow-hidden">
            {/* Purple Gradient Section - Top on sm, Right on md/lg */}
            <section className="flex-1 bg-violet-600 flex m-2 sm:m-4 lg:m-6 rounded-2xl relative overflow-hidden order-1 md:order-2 lg:min-h-[40vh] sm:min-h-[85vh] md:min-h-full ">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-sm"></div>
                    <div className="absolute bottom-20 right-16 w-16 h-16 bg-white rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 left-6 w-12 h-12 bg-white rounded-full blur-sm"></div>
                </div>

                <div className="z-10 text-white w-full flex flex-col justify-between">
                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="w-20 h-6 sm:w-24 sm:h-8 lg:w-[129px] lg:h-[40.35px] mb-4 sm:mb-6 lg:mb-8">
                            <img
                                src="/images/Group 1.png"
                                alt="Vaiva Logo"
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-8 sm:mt-10 lg:mt-16 xl:mt-20">
                            <h2 className="text-2xl sm:text-3xl lg:text-[65.87px] xl:text-[65.87px] font-satoshi font-medium leading-tight lg:leading-[73.1px] tracking-tight text-center">
                                Conecte. Combine.
                                <br />
                                Resolva.
                            </h2>
                        </div>
                    </div>

                    <div className="relative flex-1 min-h-[150px] md:min-h-0">
                        <div className="absolute inset-0">
                            <img
                                src="/images/Vaiva_elemento-1_fundo-branco.png"
                                alt="Background decoration"
                                className="w-full h-full object-cover opacity-20"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute bottom-4 sm:bottom-0 lg:bottom-6 lg:left-24 ">
                            <img
                                src="/images/Group 1618873490 1.png"
                                alt="Two professional women collaborating"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Login Form Section - Bottom on sm, Left on md/lg */}
            <section className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 order-2 md:order-1 ">
                <div className="w-full max-w-md">
                    <header className="mb-6 sm:mb-8 lg:mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-satoshi font-semibold text-gray-900 mb-2 leading-tight">
                            Se Connecter
                        </h1>
                    </header>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 sm:space-y-5 lg:space-y-6"
                    >
                        {errors.email && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-gilroy">
                                {errors.email}
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium font-gilroy text-gray-700 mb-2"
                            >
                                Courriel
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-300 bg-white font-gilroy shadow-sm hover:shadow-md focus:shadow-lg"
                                required
                                disabled={processing}
                                aria-describedby="email-help"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium font-gilroy text-gray-700 mb-2"
                            >
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-300 bg-white font-gilroy shadow-sm hover:shadow-md focus:shadow-lg"
                                required
                                disabled={processing}
                                aria-describedby="password-help"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    checked={data.rememberMe}
                                    onChange={handleInputChange}
                                    disabled={processing}
                                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                                    aria-describedby="remember-help"
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="ml-2 text-sm font-gilroy text-gray-700"
                                >
                                    Souvenir de moi
                                </label>
                            </div>
                            <a
                                href="/forgot-password"
                                className="text-sm font-gilroy text-gray-600 hover:text-violet-600 transition-colors duration-200"
                            >
                                Mot de passe oublié
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="cursor-pointer w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 px-4 text-base rounded-full font-medium font-gilroy hover:from-black hover:to-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            aria-label="Se connecter"
                        >
                            {processing ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Connexion...
                                </span>
                            ) : (
                                "Se connecter"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 sm:mt-8">
                        <div className="text-center mb-4">
                            <span className="text-sm font-gilroy text-gray-600">
                                Se connecter avec d'autres
                            </span>
                        </div>

                        <div className="space-y-3">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={processing}
                                className="cursor-pointer w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full bg-white text-gray-700 font-gilroy text-sm hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Login with Google"
                            >
                                <svg
                                    className="w-5 h-5 mr-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Login with Google
                            </button>

                            <button
                                type="button"
                                onClick={handleFacebookLogin}
                                disabled={processing}
                                className="w-full cursor-pointer flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full bg-white text-gray-700 font-gilroy text-sm hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Login with Facebook"
                            >
                                <svg
                                    className="w-5 h-5 mr-3"
                                    fill="#1877F2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Login with Facebook
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8 text-center">
                        <p className="text-sm font-gilroy text-gray-600">
                            Vous n'avez pas encore de compte ?{" "}
                            <a
                                href="/register"
                                className="text-violet-600 hover:text-violet-700 font-medium transition-colors duration-200"
                            >
                                S'inscrire
                            </a>
                        </p>
                    </div>
                </div>
            </section>

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
        </main>
    );
};

export default Login;
