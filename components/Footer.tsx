'use client';

import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="bg-[#081510] border-t border-[#d4af3720] pt-20 pb-10 px-4 md:px-6">

      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* Brand */}
          <div>

            <img
              src="/images/logo.png"
              alt="Keshvique"
              className="h-14 w-auto object-contain mb-6"
            />

            <p className="text-gray-400 leading-relaxed text-sm">

              Luxury Ayurvedic haircare rituals crafted for healthier,
              stronger and shinier hair.

            </p>

          </div>

          {/* Shop */}
          <div>

            <h3 className="text-[#d4af37] text-xl mb-6">
              Shop
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <a href="/#products">
                Products
              </a>

              <a href="/#bundles">
                Bundles
              </a>

              <Link href="/wishlist">
                Wishlist
              </Link>

              <Link href="/checkout">
                Cart
              </Link>

            </div>

          </div>

          {/* Policies */}
          <div>

            <h3 className="text-[#d4af37] text-xl mb-6">
              Policies
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <a href="#">
                Shipping Policy
              </a>

              <a href="#">
                Refund Policy
              </a>

              <a href="#">
                Privacy Policy
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[#d4af37] text-xl mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm leading-relaxed">

              <a href="mailto:chahatgoel2002@gmail.com">
                chahatgoel2002@gmail.com
              </a>

              <a href="tel:+919599754202">
                +91 9599754202
              </a>

              <p>

                Keshvique Luxury Haircare
                <br />

                New Delhi, India
                <br />

                110001

              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#d4af3720] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

          <p>
            © 2026 Keshvique.
            All rights reserved.
          </p>

          <p>
            Crafted with luxury & Ayurveda.
          </p>

        </div>

      </div>

    </footer>
  );
}