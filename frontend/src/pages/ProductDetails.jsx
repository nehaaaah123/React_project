import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <div className="text-center py-20 text-blue-600 text-xl">Loading product details...</div>;
  if (error) return <div className="text-center py-20 text-red-500 text-xl">Error: {error}</div>;

  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div className="text-center py-20 text-gray-500 text-xl">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-blue-800 mb-4">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-blue-600 mb-6">
              Rs. {product.price.toFixed(2)}
            </p>
            <button className="w-full md:w-auto bg-blue-600 text-white py-3 px-8 rounded-full shadow hover:bg-blue-700 transition duration-200">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
