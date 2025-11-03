import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    try {
      addToCart(product, 1);
      setIsAdding(true);
      setTimeout(() => setIsAdding(false), 600);
    } catch (error) {
      console.error('Add to cart failed:', error);
      setIsAdding(true);
      setTimeout(() => setIsAdding(false), 600);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div onClick={() => setShowModal(true)} className="cursor-pointer">
          <img
            src={product.imageUrl || 'https://via.placeholder.com/300'}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300?text=Product+Image';
            }}
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">
              Rs. {product.price?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>

        <div className="p-4 pt-0">
          <button
            className={`w-full ${
              isAdding ? 'bg-green-600' : 'bg-blue-600'
            } text-white py-2 px-4 rounded-full shadow hover:brightness-110 transition duration-200`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-100">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-blue-700">{product.name}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <img
                src={product.imageUrl || 'https://via.placeholder.com/600x400'}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-blue-600">
                  Rs. {product.price?.toFixed(2) || '0.00'}
                </p>
                <button
                  className={`${
                    isAdding ? 'bg-green-600' : 'bg-blue-600'
                  } text-white py-2 px-6 rounded-full shadow hover:brightness-110 transition duration-200`}
                  onClick={handleAddToCart}
                  disabled={isAdding}
                >
                  {isAdding ? 'Added ✓' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
