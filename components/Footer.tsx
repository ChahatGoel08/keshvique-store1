'use client';

import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="bg-[#081510] border-t border-[#d4af3720] pt-24 pb-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div>

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Keshvique"
              className="h-20 w-auto mb-6 object-contain"
            />

            <p className="text-gray-400 leading-relaxed">
              Luxury Ayurvedic haircare rituals crafted for healthier,
              stronger and shinier hair.
            </p>

          </div>

          {/* Shop */}
          <div>

            <h3 className="text-xl text-[#d4af37] mb-6">
              Shop
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link href="/#products">
                Products
              </Link>

              <Link href="/#bundles">
                Bundles
              </Link>

              <Link href="/wishlist">
                Wishlist
              </Link>

              <Link href="/#testimonials">
                Testimonials
              </Link>

            </div>

          </div>

          {/* Policies */}
          <div>

            <h3 className="text-xl text-[#d4af37] mb-6">
              Policies
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link href="/">
                Shipping Policy
              </Link>

              <Link href="/">
                Refund Policy
              </Link>

              <Link href="/">
                Privacy Policy
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl text-[#d4af37] mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">

              <a href="mailto:chahatgoel2002@gmail.com">
                chahatgoel2002@gmail.com
              </a>

              <a href="tel:+919599754202">
                +91 9599754202
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
              >
                Instagram
              </a>

              {/* Address */}
              <p className="pt-2">

                Keshvique Luxury Haircare
                <br />

                Alipur, New Delhi, India
                <br />

                110036

              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#d4af3720] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">

            © 2026 Keshvique.
            All rights reserved.

          </p>

          <p className="text-gray-500 text-sm">

            Crafted with luxury & Ayurveda.

          </p>

        </div>

      </div>

    </footer>
  );
}