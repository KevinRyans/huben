import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white to-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">\uD83D\uDD10 HUBen – Cybersikkerhet for SMB</h1>
        <p className="text-gray-600 mb-6">Skriv inn e-postadressen for å sjekke om den er lekket.</p>
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="din@bedrift.no" className="w-full px-4 py-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">\uD83D\uDD0D Sjekk e-post</button>
        </form>
      </div>
    </div>
  );
}
