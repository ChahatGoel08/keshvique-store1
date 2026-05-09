'use client';

import Link from 'next/link';

import { useState } from 'react';

import { useCart } from '@/context/CartContext';

export default function Navbar() {

  const { cart } = useCart();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const totalItems = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081510]/95 backdrop-blur border-b border-[#d4af3720]">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-[90px]">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center h-full shrink-0"
        >

          <img
            src="/images/logo.png"
            alt="Keshvique"
            className="h-[55px] md:h-[65px] w-auto object-contain"
          />

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-white text-[15px]">

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
            href="/testimonials"
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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          className="md:hidden text-white text-3xl"
        >

          ☰

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-[#081510] border-t border-[#d4af3720] px-6 py-6 flex flex-col gap-6 text-white text-lg">

          <a
            href="/#products"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Products
          </a>

          <a
            href="/#bundles"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Bundles
          </a>

          <Link
            href="/#testimonials"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Testimonials
          </Link>

          <Link
            href="/wishlist"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Wishlist
          </Link>

          <Link
            href="/checkout"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Cart ({totalItems})
          </Link>

        </div>

      )}

    </header>
  );
}