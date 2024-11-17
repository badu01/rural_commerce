import React from 'react'
import { useCart } from '../Constants/Values/CartContext';

function ItemCard({product}) {
    const { addToCart } = useCart;

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div key={product.key} class="w-60 h-80 bg-gray-50 shadow-md rounded-lg p-3 flex flex-col gap-1">
            <div class="duration-500  h-48" style={{backgroundImage:`url(${product.img})`,  backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col">
                  <span class="text-xl font-bold">{product.name}</span>
                  <p class="text-xs text-gray-700">{"seller : "+product.seller}</p>
                </div>
                <span class="font-bold  text-red-600">{product.price}</span>
              </div>
              <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
  )
}

export default ItemCard