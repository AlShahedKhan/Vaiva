"use client"

import React from "react"
import { Link } from "@inertiajs/react"
import { Search, Bell, Mail, HelpCircle } from "lucide-react"

interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

interface HeaderProps {
  user?: User | null
  notifications?: number
  messages?: number
}

const Header: React.FC<HeaderProps> = ({ user, notifications = 0, messages = 0 }) => {
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm" role="banner">
      <div className="max-w-7xl mx-36 sm:px-20 lg:px-0">
        <div className="flex items-center justify-between h-24">
          {/* Left Section - User Welcome */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100"
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&color=7c3aed&background=f3f4f6`
                }
                alt={`${user?.name || "User"}'s profile picture`}
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-gray-500 font-medium">Welcome</p>
              <h1 className="text-lg font-semibold text-gray-900 truncate max-w-48">{user?.name || "Guest"}</h1>
            </div>
          </div>

          {/* Center Section - Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 sm:mx-8">
            <form onSubmit={handleSearch} className="relative">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>

          {/* Right Section - Action Icons */}
          <div className="absolute right-0 top-0 flex items-center py-6 space-x-6 sm:space-x-4">
            {/* Notifications */}
            <Link
              href="/notifications"
              className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full transition-colors duration-200"
              aria-label={`Notifications${notifications > 0 ? ` (${notifications} unread)` : ""}`}
            >
              <Bell className="h-6 w-6" aria-hidden="true" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {notifications > 99 ? "99+" : notifications}
                </span>
              )}
            </Link>

            {/* Messages */}
            <Link
              href="/messages"
              className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full transition-colors duration-200"
              aria-label={`Messages${messages > 0 ? ` (${messages} unread)` : ""}`}
            >
              <Mail className="h-6 w-6" aria-hidden="true" />
              {messages > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {messages > 99 ? "99+" : messages}
                </span>
              )}
            </Link>

            {/* Help */}
            <Link
              href="/help"
              className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full transition-colors duration-200"
              aria-label="Help and support"
            >
              <HelpCircle className="h-6 w-6" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Button (for smaller screens) */}
            <div className="sm:hidden">
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full"
                aria-label="Open user menu"
              >
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-700">
                    {(user?.name || "U").charAt(0).toUpperCase()}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
