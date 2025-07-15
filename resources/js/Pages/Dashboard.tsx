import { usePage } from '@inertiajs/react'
import { router } from '@inertiajs/react'

interface User {
  id: number
  name: string
  email: string
  created_at: string
}

interface PageProps {
  user: User
}

const Dashboard = () => {
  const { user } = usePage<PageProps>().props

  const handleLogout = () => {
    router.post('/logout', {}, {
      onSuccess: () => {
        // Force redirect to home page
        window.location.href = '/'
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-gray-50">
      {/* Header with logout button */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="/images/Group 1.png"
                alt="Vaiva Logo"
                className="w-20 h-6 object-contain"
              />
              <h1 className="text-xl font-satoshi font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium font-gilroy transition-all duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-satoshi font-bold text-gray-900 mb-2">
                Bienvenue, {user.name}! 🎉
              </h1>
              <p className="text-lg text-gray-600 font-gilroy">
                Votre compte a été créé avec succès. Bienvenue sur Vaiva!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl p-6 text-white">
                <h2 className="text-2xl font-satoshi font-semibold mb-4">
                  Connecte. Combine. Resolva.
                </h2>
                <p className="font-gilroy opacity-90">
                  Commencez votre voyage avec Vaiva dès maintenant.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-satoshi font-semibold text-gray-900 mb-4">
                  Informations du compte
                </h3>
                <div className="space-y-3 font-gilroy">
                  <div>
                    <span className="text-gray-600">Nom:</span>
                    <span className="ml-2 font-medium text-gray-900">{user.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    <span className="ml-2 font-medium text-gray-900">{user.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Membre depuis:</span>
                    <span className="ml-2 font-medium text-gray-900">
                      {new Date(user.created_at).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full font-medium font-gilroy hover:from-black hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]">
                Commencer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
