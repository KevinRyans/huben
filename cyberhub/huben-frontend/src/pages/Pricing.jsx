import React from 'react'

export default function Pricing() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Prismodeller</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl bg-white shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Liten bedrift</h2>
          <p className="text-4xl font-bold mb-4">kr 99</p>
          <p className="mb-6 text-center text-gray-600">Opptil 10 brukere og grunnleggende overvåkning.</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Velg</button>
        </div>
        <div className="rounded-xl bg-white shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Mellomstor bedrift</h2>
          <p className="text-4xl font-bold mb-4">kr 299</p>
          <p className="mb-6 text-center text-gray-600">Opptil 50 brukere og avansert overvåkning.</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Velg</button>
        </div>
        <div className="rounded-xl bg-white shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Stor bedrift</h2>
          <p className="text-4xl font-bold mb-4">kr 599</p>
          <p className="mb-6 text-center text-gray-600">Ubegrenset antall brukere og fullstendig overvåkning.</p>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Velg</button>
        </div>
      </div>
    </div>
  )
}
