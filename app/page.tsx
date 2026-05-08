import Navbar from '@/components/navbar';

import Hero from '@/components/Hero';

import Products from '@/components/Products';

import Bundles from '@/components/Bundles';

import Testimonials from '@/components/Testimonials';

import WhatsAppButton from '@/components/WhatsAppButton';

import Footer from '@/components/Footer';

export default function Home() {

  return (
    <main className="bg-[#081510] text-white min-h-screen">

      <Hero />

      <Products />

      <Bundles />

      <Testimonials />

      <WhatsAppButton />


    </main>
  );
}