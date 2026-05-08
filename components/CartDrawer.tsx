'use client';

import { useState } from 'react';

export default function CartDrawer() {

  const [open, setOpen] = useState(false);

  return (
    <>

      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-[#d4af37] text-black px-6 py-4 rounded-full shadow-2xl font-semibold"
      >
        Cart
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">

          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          {/* Drawer Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#081510] border-l border-[#d4af3720] p-8 overflow-y-auto">

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
            <div className="text-center mt-20">

              <p className="text-gray-400 mb-8">
                Your cart is currently empty.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold"
              >
                Continue Shopping
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}