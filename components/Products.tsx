'use client';

import Link from 'next/link';

import { useState } from 'react';

import { useWishlist } from '@/context/WishlistContext';

export default function Products() {

  const [search, setSearch] =
    useState('');

  const [filter, setFilter] =
    useState('all');

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const products = [
    {
      id: 'hair-growth-oil',
      name: 'Hair Growth & Anti-Hair Fall Oil',
      image: '/images/product1.png',
      price: 'From ₹399',
      concern: 'Hair Growth',
    },

    {
      id: 'scalp-detox-oil',
      name: 'Anti Dandruff & Scalp Detox Oil',
      image: '/images/product2.png',
      price: 'From ₹399',
      concern: 'Scalp Care',
    },

    {
      id: 'shine-hair-oil',
      name: 'Nourishing & Shine Hair Oil',
      image: '/images/product3.png',
      price: 'From ₹499',
      concern: 'Hair Shine',
    },
  ];

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        filter === 'all'
          ? true
          : product.concern === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (
    <section
      id="products"
      className="py-24 px-6 bg-[#081510]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Featured Collection
          </p>

          <h2 className="text-5xl text-white font-light mb-10">
            Signature Hair Oils
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full max-w-xl bg-[#13271f] border border-[#d4af3720] rounded-full px-6 py-4 text-white outline-none mb-8"
          />

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.map(
            (product) => (

              <div
                key={product.id}
                className="relative bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720]"
              >

                {/* Wishlist */}
                <button
                  onClick={() =>
                    toggleWishlist({
                      id: product.id,
                      name:
                        product.name,
                      image:
                        product.image,
                      price:
                        product.price,
                    })
                  }
                  className="absolute top-5 right-5 z-20 text-3xl"
                >

                  {isWishlisted(
                    product.id
                  )
                    ? '❤️'
                    : '🤍'}

                </button>

                {/* Image */}
                <Link
                  href={`/product/${product.id}`}
                >

                  <img
                    src={product.image}
                    className="w-full h-[320px] md:h-[420px] object-cover hover:scale-105 transition duration-700 cursor-pointer"
                  />

                </Link>

                {/* Content */}
                <div className="p-8">

                  <p className="text-[#d4af37] text-sm uppercase tracking-widest mb-2">
                    {product.concern}
                  </p>

                  <h3 className="text-3xl md:text-3xl text-[#f3deb0] mb-3">
                    {product.name}
                  </h3>

                  <p className="text-[#d4af37] text-xl mb-8">
                    {product.price}
                  </p>

                  {/* View Product */}
                  <Link
                    href={`/product/${product.id}`}
                    className="block bg-[#d4af37] text-black text-center py-4 rounded-full font-semibold hover:scale-105 transition"
                  >

                    View Product

                  </Link>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}
