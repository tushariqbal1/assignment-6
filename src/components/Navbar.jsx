import { useState } from "react";

function Navbar({ totalItems, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-purple-600 tracking-tight">DigiTools</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600 transition-colors">Products</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Features</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-purple-600 transition-colors">FAQ</a>
        </div>

        {/* Right Side Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setActiveTab("cart")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors"
          >
            Cart ({totalItems})
          </button>

          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors">
            Login
          </button>

          <button className="btn btn-primary px-8 py-2.5 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[16px] font-bold text-gray-800 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#" className="block hover:text-purple-600">Products</a>
          <a href="#" className="block hover:text-purple-600">Features</a>
          <a href="#" className="block hover:text-purple-600">Pricing</a>
          <a href="#" className="block hover:text-purple-600">Testimonials</a>
          <a href="#" className="block hover:text-purple-600">FAQ</a>

          <button
            onClick={() => setActiveTab("cart")}
            className="w-full text-left flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors"
          >
            Cart ({totalItems})
          </button>

          <button className="w-full text-left flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors">
            Login
          </button>

          <button className="w-full btn btn-primary px-8 py-2.5 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
