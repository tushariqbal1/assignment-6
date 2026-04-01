import { useState } from 'react';

function Navbar({ totalItems, setActiveTab }) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🚀</span>
          <h1 className="text-3xl font-bold text-purple-600 tracking-tight">DigiTools</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600 transition-colors">Products</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Features</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-purple-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab('cart')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors"
          >
            🛒 Cart ({totalItems})
          </button>

          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors">
            <span>👤</span> Login
          </button>

          <button className="btn btn-primary px-8 py-2.5 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;