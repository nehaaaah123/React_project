import React, { useRef } from 'react';
import ProductList from '../components/ProductList';
import Cart from './Cart';

const Home = () => {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const cartRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        id="home"
        ref={homeRef}
        className="pt-24 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight drop-shadow">
            Welcome to <span className="text-blue-600">N Store</span>
          </h1>
          <p className="text-xl text-blue-800 mb-10">
            Discover amazing products at unbeatable prices
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection(productsRef)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              🛍️ Shop Now
            </button>
            <button
              onClick={() => scrollToSection(cartRef)}
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full shadow hover:bg-blue-50 transition"
            >
              🛒 View Cart
            </button>
          </div>
        </div>
      </section>

      <section id="products" ref={productsRef} className="pt-16 bg-blue-50">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
            ✨ Our Products
          </h2>
          <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
            <ProductList />
          </div>
        </div>
      </section>

      <section id="cart" ref={cartRef} className="pt-16 bg-blue-100">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
            🛒 Your Cart
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
