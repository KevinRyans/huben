import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex space-x-4">
      <Link className="hover:underline" to="/">Home</Link>
      <Link className="hover:underline" to="/pricing">Pricing</Link>
      <Link className="hover:underline" to="/dashboard">Dashboard</Link>
      <Link className="hover:underline" to="/admin">Admin</Link>
    </nav>
  );
}
