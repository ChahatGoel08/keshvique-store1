'use client';

import Link from 'next/link';

import { useWishlist } from '@/context/WishlistContext';

import { useCart } from '@/context/CartContext';

export default function WishlistPage() {

  const {
    wishlist,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#081510] text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Your Favorites
          </p>

          <h1 className="text-6xl font-light">
            Wishlist
          </h1>

        </div>

        {/* Empty State */}
        {wishlist.length === 0 && (

          <div className="text-center">

            <p className="text-gray-400 mb-10 text-xl">
              Your wishlist is empty.
            </p>

            <Link
              href="/"
              className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold"
            >
              Continue Shopping
            </Link>

          </div>

        )}

        {/* Wishlist Grid */}
        {wishlist.length > 0 && (

          <div className="grid md:grid-cols-3 gap-10">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="relative bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720]"
              >

                {/* Remove Button */}
                <button
                  onClick={() =>
                    toggleWishlist(product)
                  }
                  className="absolute top-5 right-5 z-20 text-3xl"
                >
                  ❤️
                </button>

                {/* Image */}
                <img
                  src={product.image}
                  className="w-full h-[420px] object-cover"
                />

                {/* Content */}
                <div className="p-8">

                  <h2 className="text-2xl text-[#f3deb0] mb-4">
                    {product.name}
                  </h2>

                  <p className="text-[#d4af37] text-xl mb-8">
                    {product.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-4">

                    <button
                      onClick={() =>
                        addToCart({
                          name: product.name,
                          image: product.image,
                          price: product.price,
                        })
                      }
                      className="bg-[#d4af37] text-black py-4 rounded-full font-semibold hover:scale-105 transition"
                    >
                      Add To Cart
                    </button>

                    <Link
                      href={`/product/${product.id}`}
                      className="border border-[#d4af3720] text-center py-4 rounded-full hover:border-[#d4af37] transition"
                    >
                      View Product
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}