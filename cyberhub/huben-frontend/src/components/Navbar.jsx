import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
    }`

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-lg font-bold text-gray-900">
            HUBen
          </NavLink>
          <div className="flex space-x-2">
            <NavLink to="/pricing" className={linkClasses}>
              Priser
            </NavLink>
            <NavLink to="/dashboard" className={linkClasses}>
              Bedriftspanel
            </NavLink>
            <NavLink to="/admin" className={linkClasses}>
              Adminpanel
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
