import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    const searchTerms = searchQuery.toLowerCase().split(' ');
    return products.filter(product => {
      const searchText = `${product.name} ${product.description}`.toLowerCase();
      return searchTerms.every(term => searchText.includes(term));
    });
  }, [products, searchQuery]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-16 text-blue-600">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-300 border-t-transparent mb-4"></div>
      <span className="text-lg font-medium">Loading products...</span>
    </div>
  );

  if (error) return (
    <div className="p-6 border border-red-300 bg-red-50 rounded-xl shadow-md max-w-xl mx-auto text-center">
      <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Products</h3>
      <p className="text-red-600 mb-4">{error}</p>
      <button 
        onClick={() => window.location.reload()}
        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        🔄 Try Again
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
    
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md p-6">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16 text-blue-600">
            <p className="text-xl font-semibold mb-2">No products found</p>
            <p className="text-gray-500">Try searching for something else like “laptop” or “speaker”</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
