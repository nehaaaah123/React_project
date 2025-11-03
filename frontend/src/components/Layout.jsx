import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <Navbar />
      <main className="flex-1 container mx-auto py-10 px-4 md:px-8 transition-all duration-300">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-blue-100">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
