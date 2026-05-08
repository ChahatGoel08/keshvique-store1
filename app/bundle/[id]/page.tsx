'use client';

import { useParams } from 'next/navigation';

import { useCart } from '@/context/CartContext';

export default function BundlePage() {

  const params = useParams();

  const { addToCart } = useCart();

  const bundles = [
    {
      id: 'hair-growth-bundle',

      name: 'Hair Growth Bundle',

      price: '₹1299',

      description:
        'A complete Ayurvedic ritual designed to reduce hair fall and stimulate healthy hair growth.',

      images: [
        '/images/bundle1.png',
        '/images/bundle1-1.png',
        
      ],

      includes: [
        'Hair Growth & Anti - Hair Fall Oil 200 ML',
        'Anti - Dandruff & Scalp Detox Oil',
        'Wooden Massage Comb',
      ],
    },

    {
      id: 'complete-hair-ritual',

      name: 'Complete Hair Ritual',

      price: '₹1799',

      description:
        'The ultimate luxury self-care routine for stronger, shinier and healthier hair.',

      images: [
        '/images/bundle2.png',
        '/images/bundle2-1.png',

      ],

      includes: [
        'Hair Growth & Anti - Hair Fall Oil 200 ML',
        'Anti - Dandruff & Scalp Detox Oil 200 ML',
        'Nourishing & Shine Hair Oil 200 ML',
        'Luxury Gift Box',
        'Wooden Scalp Massager',
      ],
    },

    {
      id: 'scalp-care-bundle',

      name: 'Scalp Care Bundle',

      price: '₹1499',

      description:
        'Deep scalp detox and nourishment ritual inspired by Ayurvedic wellness.',

      images: [
        '/images/bundle3.png',
        '/images/bundle3-1.png',
        
      ],

      includes: [
        'Anti - Dandruff & Scalp Detox Oil 200 ML',
        'Ayurvedic Scalp Brush',
        'Anti-Dandruff Hair Mask 100 ML',
      ],
    },
  ];

  const bundle = bundles.find(
    (item) => item.id === params.id
  );

  if (!bundle) {

    return (
      <div className="min-h-screen bg-[#081510] text-white flex items-center justify-center text-3xl">

        Bundle not found.

      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#081510] text-white py-32 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT IMAGES */}
        <div className="space-y-6">

          {bundle.images.map(
            (image, index) => (

              <img
                key={index}
                src={image}
                className="rounded-[2rem] border border-[#d4af3720] hover:scale-[1.01] transition"
              />

            )
          )}

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Luxury Bundle
          </p>

          <h1 className="text-6xl font-light mb-8">
            {bundle.name}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {bundle.description}
          </p>

          <div className="text-5xl text-[#d4af37] font-bold mb-10">
            {bundle.price}
          </div>

          {/* Includes */}
          <div className="mb-12">

            <h2 className="text-2xl text-[#f3deb0] mb-6">
              Bundle Includes
            </h2>

            <div className="space-y-4">

              {bundle.includes.map(
                (item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 text-lg"
                  >

                    <span className="text-[#d4af37]">
                      ✦
                    </span>

                    {item}

                  </div>

                )
              )}

            </div>

          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-12">

            <div className="bg-[#13271f] border border-[#d4af3720] p-6 rounded-2xl">

              <p className="text-[#d4af37] mb-2">
                100% Natural
              </p>

              <p className="text-gray-400 text-sm">
                Ayurvedic ingredients only
              </p>

            </div>

            <div className="bg-[#13271f] border border-[#d4af3720] p-6 rounded-2xl">

              <p className="text-[#d4af37] mb-2">
                Luxury Ritual
              </p>

              <p className="text-gray-400 text-sm">
                Premium hair wellness routine
              </p>

            </div>

          </div>

          {/* Add To Cart */}
          <button
            onClick={() => {

              addToCart({
                name: bundle.name,
                image:
                  bundle.images[0],
                price: bundle.price,
              });

              alert(
                'Bundle added to cart!'
              );
            }}
            className="w-full bg-[#d4af37] text-black py-5 rounded-full text-lg font-semibold hover:scale-105 transition"
          >

            Add Bundle To Cart

          </button>

        </div>

      </div>

    </main>
  );
}