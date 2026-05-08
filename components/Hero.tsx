'use client';

export default function Hero() {

  return (
    <section
      className="relative min-h-screen pt-32 flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('/images/hero-banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">

        <p className="uppercase tracking-[0.4em] text-[#d4af37] mb-6">
          Luxury Ayurvedic Haircare
        </p>

        <h1 className="text-5xl md:text-8xl font-light leading-tight mb-8 text-white">

          Ancient Ayurvedic Rituals
          <br />
          For Modern Haircare

        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">

          Clinically inspired botanical oils crafted for stronger,
          healthier and shinier hair.

        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">

          <button className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

            Shop Now

          </button>

          <button className="border border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full hover:bg-[#d4af37] hover:text-black transition">

            Explore Bundles

          </button>

        </div>

      </div>

    </section>
  );
}