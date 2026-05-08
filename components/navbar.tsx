'use client';

import Link from 'next/link';

import { useCart } from '@/context/CartContext';

export default function Navbar() {

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081510]/90 backdrop-blur border-b border-[#d4af3720]">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4"
        >

          <img
            src="/images/logo.png"
            alt="Keshvique"
            className="h-20 w-auto object-contain"
          />

        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-white">

          <a
            href="/#products"
            className="hover:text-[#d4af37] transition"
          >
            Products
          </a>

          <a
            href="/#bundles"
            className="hover:text-[#d4af37] transition"
          >
            Bundles
          </a>

          <Link
            href="/#testimonials"
            className="hover:text-[#d4af37] transition"
          >
            Testimonials
          </Link>

          <Link
            href="/wishlist"
            className="hover:text-[#d4af37] transition"
          >
            Wishlist
          </Link>

          <Link
            href="/checkout"
            className="hover:text-[#d4af37] transition"
          >
            Cart ({totalItems})
          </Link>

        </nav>

      </div>

    </header>
  );
}