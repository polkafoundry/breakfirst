import { Inter, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const sourceSansPro = localFont({
  src: './SourceSansPro/source-sans-pro.extralight.ttf',
  variable: '--ssp-font',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});

export const poppins = Poppins({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppins-font',
});
