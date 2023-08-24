import clsx from 'clsx';
import { Metadata } from 'next';
import { archivo, barlow, inter, poppins, sourceSansPro } from '@/assets/fonts';
import './globals.css';

const defaultMetadata = {
  title: 'BreakFirst - Embrace limits breaking. Make decentralization shines.',
  description:
    'An early stage web3 fund and incubator run by a team of seasoned crypto founders, incubators, and investors',
  image: 'https://i.imgur.com/HcMJ7Rs.png',
  url: 'https://breakfirstfund.com',
};

export const metadata: Metadata = {
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  openGraph: {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    siteName: defaultMetadata.url,
    images: [
      {
        url: defaultMetadata.image,
        width: 1920,
        height: 1080,
        alt: 'BreakFirst thumbnail',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: [defaultMetadata.image],
  },
  // metadataBase: new URL(''),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-black">
        <main
          className={clsx(
            sourceSansPro.variable,
            inter.variable,
            poppins.variable,
            barlow.variable,
            archivo.variable,
            'relative h-screen overflow-x-hidden w-screen overflow-y-hidden font-barlow text-white'
          )}
          id="main"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
