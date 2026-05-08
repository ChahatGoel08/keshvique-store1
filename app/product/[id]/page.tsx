'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { useCart } from '@/context/CartContext';

import RecentlyViewed from '@/components/RecentlyViewed';

export default function ProductPage() {

  const params = useParams();

  const { addToCart } = useCart();

  const products = [
    {
      id: 'hair-growth-oil',

      name: 'Hair Growth & Anti-Hair Fall Oil',

      description: [
        'Awaken Your Roots. Reclaim Your Crown.',
        'Rooted in centuries of Ayurvedic wisdom, the Keshvique Hair Growth &amp; Anti-Hair Fall Oil is a luxurious elixir crafted to strengthen hair from root to tip. Each drop is a ritual — a promise of thicker, fuller, and more resilient hair.',
        'Pure. Potent. Ayurvedic. — Keshvique',
      ],

      reviews: [
        'Amazing product quality.',
        'Visible results within weeks.',
        'Premium luxurious experience.',
      ],

      variants: [
        {
          size: '100 ML',

          price: '₹399',

          stock: 100,

          images: [
            '/images/product1.png',
            '/images/product1-2.png',
            '/images/product1-3.png',
          ],
        },

        {
          size: '200 ML',

          price: '₹699',

          stock: 100,

          images: [
            '/images/product1-4.png',
            '/images/product1-5.png',
            '/images/product1-6.png',
          ],
        },
      ],
    },

    {
      id: 'scalp-detox-oil',

      name: 'Anti Dandruff & Scalp Detox Oil',

      description:
        'Purifies scalp buildup and restores healthy scalp balance naturally.',

      reviews: [
        'Very soothing on scalp.',
        'Premium fragrance.',
        'Loved the packaging.',
      ],

      variants: [
        {
          size: '100 ML',

          price: '₹399',

          stock: 10,

          images: [
            '/images/product2.png',
            '/images/product2-2.png',
            '/images/product2-3.png',
          ],
        },

        {
          size: '200 ML',

          price: '₹699',

          stock: 100,

          images: [
            '/images/product2-4.png',
            '/images/product2-5.png',
            '/images/product2-6.png',
          ],
        },
      ],
    },

    {
      id: 'shine-hair-oil',

      name: 'Nourishing & Shine Hair Oil',

      description:
        'Intense nourishment and luxurious shine for silky smooth hair.',

      reviews: [
        'Hair feels much softer.',
        'Best shine oil ever.',
        'Highly recommended.',
      ],

      variants: [
        {
          size: '100 ML',

          price: '₹499',

          stock: 100,

          images: [
            '/images/product3.png',
            '/images/product3-2.png',
            '/images/product3-3.png',
          ],
        },

        {
          size: '200 ML',

          price: '₹899',

          stock: 100,

          images: [
            '/images/product3-4.png',
            '/images/product3-5.png',
            '/images/product3-6.png',
          ],
        },
      ],
    },
  ];

  const product = products.find(
    (item) => item.id === params.id
  );

  const [selectedVariant, setSelectedVariant] = useState(0);

  const [selectedImage, setSelectedImage] = useState(0);

  const [activeTab, setActiveTab] =
    useState('description');

  if (!product) {

    return (
      <div className="min-h-screen bg-[#081510] text-white flex items-center justify-center">

        Product not found.

      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const currentPrice = variant.price;

  /* RECENTLY VIEWED */
  useEffect(() => {

    const viewed =
      JSON.parse(
        localStorage.getItem(
          'keshvique-recent'
        ) || '[]'
      );

    const exists = viewed.find(
      (item: any) =>
        item.id === product.id
    );

    if (!exists) {

      viewed.unshift({
        id: product.id,
        name: product.name,
        image: variant.images[0],
        price: variant.price,
      });

      localStorage.setItem(
        'keshvique-recent',
        JSON.stringify(
          viewed.slice(0, 6)
        )
      );
    }

  }, [product, variant]);

  return (
    <main className="min-h-screen bg-[#081510] text-white py-32 px-6 pb-40">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* Main Image */}
          <div className="group overflow-hidden rounded-[2rem] border border-[#d4af3720] mb-6 cursor-zoom-in">

            <img
              src={variant.images[selectedImage]}
              className="w-full transition duration-700 group-hover:scale-110"
            />

          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto">

            {variant.images.map((image, index) => (

              <img
                key={index}
                src={image}
                onClick={() =>
                  setSelectedImage(index)
                }
                className={`w-24 h-24 rounded-xl object-cover cursor-pointer border transition hover:scale-105 ${
                  selectedImage === index
                    ? 'border-[#d4af37]'
                    : 'border-[#d4af3720]'
                }`}
              />

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">

            Keshvique Luxury Ritual

          </p>

          <h1 className="text-6xl font-light mb-8">

            {product.name}

          </h1>

          {/* Variants */}
          <div className="flex gap-4 mb-8">

            {product.variants.map((item, index) => (

              <button
                key={index}
                onClick={() => {
                  setSelectedVariant(index);
                  setSelectedImage(0);
                }}
                className={`px-6 py-3 rounded-full border transition ${
                  selectedVariant === index
                    ? 'bg-[#d4af37] text-black'
                    : 'border-[#d4af3720]'
                }`}
              >

                {item.size}

              </button>

            ))}

          </div>

          {/* Inventory */}
          <div className="mb-6">

            {variant.stock > 5 && (

              <p className="text-green-400">
                In Stock
              </p>

            )}

            {variant.stock > 0 &&
              variant.stock <= 5 && (

                <p className="text-yellow-400">
                  Only {variant.stock} left
                </p>

            )}

            {variant.stock === 0 && (

              <p className="text-red-400">
                Sold Out
              </p>

            )}

          </div>

          {/* Price */}
          <div className="text-4xl text-[#d4af37] font-bold mb-8">

            {variant.price}

          </div>

          {/* Add To Cart */}
          <button
            disabled={variant.stock === 0}
            onClick={() =>
              addToCart({
                name: `${product.name} (${variant.size})`,
                image: variant.images[0],
                price: variant.price,
              })
            }
            className={`px-10 py-5 rounded-full text-lg font-semibold transition mb-12 ${
              variant.stock === 0
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-[#d4af37] text-black hover:scale-105'
            }`}
          >

            {variant.stock === 0
              ? 'Sold Out'
              : 'Add To Cart'}

          </button>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-[#d4af3720] mb-8">

            <button
              onClick={() =>
                setActiveTab('description')
              }
              className={`pb-4 transition ${
                activeTab === 'description'
                  ? 'text-[#d4af37] border-b border-[#d4af37]'
                  : 'text-gray-400'
              }`}
            >

              Description

            </button>

            <button
              onClick={() =>
                setActiveTab('reviews')
              }
              className={`pb-4 transition ${
                activeTab === 'reviews'
                  ? 'text-[#d4af37] border-b border-[#d4af37]'
                  : 'text-gray-400'
              }`}
            >

              Reviews

            </button>

          </div>

          {/* Description */}
          {activeTab === 'description' && (

            <div className="text-gray-300 leading-relaxed text-lg">

              {product.description}

            </div>

          )}

          {/* Reviews */}
          {activeTab === 'reviews' && (

            <div className="space-y-6">

              {product.reviews.map((review, index) => (

                <div
                  key={index}
                  className="border border-[#d4af3720] rounded-2xl p-6"
                >

                  ⭐⭐⭐⭐⭐

                  <p className="mt-4 text-gray-300">

                    {review}

                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

      {/* Related Products */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
              You May Also Like
            </p>

            <h2 className="text-5xl font-light">
              Related Products
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {products
              .filter(
                (item) =>
                  item.id !== product.id
              )
              .map((item) => (

                <a
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="bg-[#13271f] rounded-[2rem] overflow-hidden border border-[#d4af3720] hover:scale-[1.02] transition"
                >

                  <img
                    src={
                      item.variants[0]
                        .images[0]
                    }
                    className="w-full h-[420px] object-cover"
                  />

                  <div className="p-8">

                    <h3 className="text-2xl text-[#f3deb0] mb-4">
                      {item.name}
                    </h3>

                    <p className="text-[#d4af37] text-xl">
                      {
                        item.variants[0]
                          .price
                      }
                    </p>

                  </div>

                </a>

              ))}

          </div>

        </div>

      </section>

      {/* Recently Viewed */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
              Continue Exploring
            </p>

            <h2 className="text-5xl font-light">
              Recently Viewed
            </h2>

          </div>

          <RecentlyViewed />

        </div>

      </section>

      {/* Sticky Add To Cart */}
      <div className="fixed bottom-0 left-0 w-full z-[9999] bg-[#081510]/95 backdrop-blur border-t border-[#d4af3720] px-6 py-4">

        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

          {/* Product Info */}
          <div>

            <h3 className="text-[#f3deb0] text-lg md:text-2xl">
              {product.name}
            </h3>

            <p className="text-[#d4af37] text-sm md:text-lg">
              {variant.size} • {currentPrice}
            </p>

          </div>

          {/* Sticky Add To Cart */}
          <button
            disabled={variant.stock === 0}
            onClick={() =>
              addToCart({
                name: `${product.name} (${variant.size})`,
                image: variant.images[0],
                price: variant.price,
              })
            }
            className={`px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold transition ${
              variant.stock === 0
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-[#d4af37] text-black hover:scale-105'
            }`}
          >

            {variant.stock === 0
              ? 'Sold Out'
              : 'Add To Cart'}

          </button>

        </div>

      </div>

    </main>
  );
}
