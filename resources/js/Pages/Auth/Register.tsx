"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "@inertiajs/react"

interface FormData {
  name: string
  email: string
  password: string
  password_confirmation: string
  rememberMe: boolean
}

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm<FormData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    rememberMe: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setData(name as keyof FormData, type === "checkbox" ? checked : value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/register', {
      onSuccess: () => {
        reset()
      },
    })
  }

  return (
    <main className="h-screen flex flex-col sm:flex-col md:flex-row sm:overflow-y-auto md:overflow-hidden lg:overflow-hidden">
      {/* Purple Section - Top only on sm, Right on md/lg */}
      <section className="flex-1 bg-violet-600 flex m-2 sm:m-4 lg:m-6 rounded-2xl relative overflow-hidden min-h-[45vh] sm:min-h-[40vh] md:min-h-full order-1 sm:order-1 md:order-2 overflow-y-auto">
        <div className="text-white w-full flex flex-col justify-between">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="w-20 h-6 sm:w-24 sm:h-8 lg:w-[129px] lg:h-[40.35px] mb-4 sm:mb-6 lg:mb-8">
              <img
                src="/build/assets/images/Group 1.png"
                alt="Vaiva Logo"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-10 sm:mt-12 lg:mt-16 xl:mt-20">
              <h2 className="text-[65.87px] sm:text-[65.87px] lg:text-[65.87px] xl:text-[65.87px] font-satoshi font-medium leading-[73.1px] tracking-[0]">
                Conecte.
                <br />
                Combine.
                <br />
                Resolva.
              </h2>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-0">
              <img
                src="/build/assets/images/Vaiva_elemento-1_fundo-branco.png"
                alt="Background decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 right-26 w-1/2 sm:w-2/3 lg:w-auto">
              <img
                src="/build/assets/images/image 29 (1) 2.png"
                alt="Professional person with laptop"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Bottom on sm, Left on md/lg */}
      <section className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-[55vh] sm:min-h-[60vh] md:min-h-full order-2 sm:order-2 md:order-1">
        <div className="w-full max-w-md">
          <header className="mb-3 sm:mb-4 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-satoshi font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
              S'inscrire
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm font-gilroy leading-relaxed">
              Rejoignez-Nous Aujourd'hui Remplissez Le Formulaire Pour Commencer
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 lg:space-y-6">
            <div>
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold font-satoshi text-gray-900 mb-2 sm:mb-3 lg:mb-6">
                Créez votre compte
              </h2>
            </div>

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-medium font-gilroy text-gray-700 mb-1 sm:mb-2"
              >
                Nom et prénom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                placeholder="Tapez Nom"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-300 bg-white font-gilroy shadow-sm hover:shadow-md focus:shadow-lg ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-describedby="name-help"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 font-gilroy">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium font-gilroy text-gray-700 mb-1 sm:mb-2"
              >
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                placeholder="✉ Exemple"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-300 bg-white font-gilroy shadow-sm hover:shadow-md focus:shadow-lg ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-describedby="email-help"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-gilroy">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm font-medium font-gilroy text-gray-700 mb-1 sm:mb-2"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="🔒 Mot de passe"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-300 bg-white font-gilroy shadow-sm hover:shadow-md focus:shadow-lg ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                required
                aria-describedby="password-help"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-600 font-gilroy">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-xs sm:text-sm font-medium font-gilroy text-gray-700 mb-1 sm:mb-2"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={data.password_confirmation}
                onChange={handleInputChange}
                placeholder="🔒 Mot de passe"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all duration-300 bg-white font-gilroy shadow-sm hover:shadow-md focus:shadow-lg"
                required
                aria-describedby="confirm-password-help"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={data.rememberMe}
                onChange={handleInputChange}
                className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                aria-describedby="remember-help"
              />
              <label htmlFor="rememberMe" className="ml-2 text-xs sm:text-sm font-gilroy text-gray-700">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className={`w-full bg-gradient-to-r from-gray-900 to-black text-white py-2 sm:py-3 px-4 text-sm sm:text-base rounded-full font-medium font-gilroy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-lg transform active:scale-[0.98] ${
                processing
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-black hover:to-gray-800 hover:shadow-xl hover:scale-[1.02]'
              }`}
              aria-label="Créer un compte"
            >
              {processing ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Register
