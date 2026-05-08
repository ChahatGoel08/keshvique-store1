'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

export default function RecentlyViewed() {

  const [products, setProducts] =
    useState<any[]>([]);

  useEffect(() => {

    const recent =
      JSON.parse(
        localStorage.getItem(
          'keshvique-recent'
        ) || '[]'
      );

    setProducts(recent);

  }, []);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-3 gap-10">

      {products.map((product) => (

        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720] hover:scale-[1.02] transition"
        >

          <img
            src={product.image}
            className="w-full h-[420px] object-cover"
          />

          <div className="p-8">

            <h3 className="text-2xl text-[#f3deb0] mb-4">
              {product.name}
            </h3>

            <p className="text-[#d4af37] text-xl">
              {product.price}
            </p>

          </div>

        </Link>

      ))}

    </div>
  );
}