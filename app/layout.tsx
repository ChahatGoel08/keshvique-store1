import './globals.css';

import Navbar from '@/components/navbar';

import Footer from '@/components/Footer';

import Providers from './providers';

export const metadata = {
  title: 'Keshvique',
  description:
    'Luxury Ayurvedic Haircare',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-[#081510] text-white">

        <Providers>

          <Navbar />

          {children}

          <Footer />

        </Providers>

      </body>

    </html>
  );
}