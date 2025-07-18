import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white to-gray-100 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transition">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">🔐 HUBen – Cybersikkerhet for SMB</h1>
        <p className="text-gray-600 mb-6">Skriv inn e-postadressen din for å sjekke om den er lekket i kjente databrudd.</p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="din@bedrift.no"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            🔍 Sjekk e-post
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
