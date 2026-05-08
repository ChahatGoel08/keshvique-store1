'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useCart } from '@/context/CartContext';

export default function CartDrawer() {

  const [open, setOpen] = useState(false);

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce((acc, item) => {
    return (
      acc +
      Number(item.price.replace('₹', '')) *
        item.quantity
    );
  }, 0);

  return (
    <>

      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-[9999] bg-[#d4af37] text-black px-6 py-4 rounded-full shadow-2xl font-semibold hover:scale-105 transition"
      >
        Cart ({cart.length})
      </button>

      {/* Drawer */}
      {open && (

        <div className="fixed inset-0 z-[99999]">

          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          {/* Drawer Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#081510] border-l border-[#d4af3720] p-8 overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">

              <h2 className="text-3xl text-[#f3deb0]">
                Your Cart
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-3xl text-[#d4af37]"
              >
                ×
              </button>

            </div>

            {/* Empty Cart */}
            {cart.length === 0 ? (

              <div className="text-center mt-20">

                <p className="text-gray-400 mb-8">
                  Your cart is empty.
                </p>

              </div>

            ) : (

              <>
                {/* Cart Items */}
                <div className="space-y-6">

                  {cart.map((item) => (

                    <div
                      key={item.name}
                      className="border border-[#d4af3720] rounded-2xl p-4"
                    >

                      <div className="flex gap-4">

                        {/* Product Image */}
                        <img
                          src={item.image}
                          className="w-24 h-24 object-cover rounded-xl"
                        />

                        {/* Product Details */}
                        <div className="flex-1">

                          <h3 className="text-[#f3deb0] text-lg mb-2">
                            {item.name}
                          </h3>

                          <p className="text-[#d4af37] mb-4">
                            {item.price}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.name)
                              }
                              className="w-8 h-8 rounded-full border border-[#d4af3720]"
                            >
                              -
                            </button>

                            <span className="text-white">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.name)
                              }
                              className="w-8 h-8 rounded-full border border-[#d4af3720]"
                            >
                              +
                            </button>

                          </div>

                        </div>

                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() =>
                          removeFromCart(item.name)
                        }
                        className="text-red-400 mt-4 text-sm"
                      >
                        Remove
                      </button>

                    </div>

                  ))}

                </div>

                {/* Total */}
                <div className="border-t border-[#d4af3720] mt-10 pt-6">

                  <div className="flex justify-between items-center mb-8">

                    <span className="text-xl text-gray-300">
                      Total
                    </span>

                    <span className="text-3xl text-[#d4af37] font-bold">
                      ₹{total}
                    </span>

                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/checkout"
                    className="block w-full bg-[#d4af37] text-black py-4 rounded-full font-semibold text-center hover:scale-105 transition"
                  >
                    Proceed To Checkout
                  </Link>

                </div>

              </>

            )}

          </div>

        </div>

      )}

    </>
  );
}