import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-3">🛍️ N Store</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Quality products, fast shipping, and friendly support. Your satisfaction is our priority.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer transition duration-200">Home</li>
            <li className="hover:text-white cursor-pointer transition duration-200">Products</li>
            <li className="hover:text-white cursor-pointer transition duration-200">Cart</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-sm text-gray-400">📧 n.store@gmail.com</p>
          <p className="text-sm text-gray-400">📞 +91 9834 567 890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-gray-500 text-sm py-4">
        <div className="container mx-auto px-6 text-center">
          © {new Date().getFullYear()} <span className="text-white font-semibold">N Store</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
