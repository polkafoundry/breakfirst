import clsx from 'clsx';
import { inter } from '@/assets/fonts';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BreakFirst',
  description: 'An early-stage web3 fund and incubator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={(clsx(inter.className), 'bg-[#191A1E]')}>
        <main className="relative h-screen w-screen">{children}</main>
      </body>
    </html>
  );
}
