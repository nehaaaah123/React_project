import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h1>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <div className="text-6xl mb-4">🛍️</div>
            <p className="text-lg">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-2">Start adding products to see them here</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500">Rs. {item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <div className="w-28 text-right font-semibold text-blue-600">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="pt-6 border-t">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">Rs. {total.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1 text-right">
                Includes all items and quantities
              </p>

              <div className="flex gap-4 mt-6">
                <button
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => alert('Proceeding to checkout...')}
                >
                  Proceed to Checkout
                </button>
                <button
                  className="bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
