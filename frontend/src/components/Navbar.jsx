import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems?.reduce((total, item) => total + (item.quantity || 1), 0) || 0;

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <Link to="/" className="text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition">
          🛍️ N Store
        </Link>

        <div className="flex items-center space-x-8 text-lg font-semibold">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('products')}
            className="hover:text-yellow-300 transition duration-200"
          >
            Products
          </button>

          <button
            onClick={() => scrollToSection('cart')}
            className="relative hover:text-yellow-300 transition duration-200"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-4 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-md animate-bounce">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
