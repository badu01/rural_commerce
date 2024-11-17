import React from 'react';
import { useCart } from '../Constants/Values/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center p-3 border-b">
              <div>
                <p>{item.name}</p>
                <p>Seller: {item.seller}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <span className="font-bold">{item.price * item.quantity} ₹</span>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <h3 className="text-xl font-bold">Total: {getTotalPrice()} ₹</h3>
            <Link to="/checkout" className="bg-green-600 text-white py-2 px-6 rounded-md">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
