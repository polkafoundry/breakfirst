/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'headline-bg': "url('./src/assets/images/LandingPage/headline-bg.png')",
      },
      fontFamily: {
        sourceSansPro: ['var(--ssp-font)'],
        inter: ['var(--inter-font)'],
        poppins: ['var(--poppins-font)'],
        barlow: ['var(--barlow-font)'],
        archivo: ['var(--archivo-font)'],
      },
      borderRadius: {
        '1.5xl': '14px',
      },
      padding: {
        15: '60px',
      },
    },
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.35rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.75rem' }],
      '22/28': ['1.375rem', { lineHeight: '1.75rem' }],
      '36/44': ['2.25rem', { lineHeight: '2.75rem' }],
      '36/50': ['2.25rem', { lineHeight: '3.125rem' }],
      '40/56': ['2.5rem', { lineHeight: '3.5rem' }],
      '54/64': ['3.375rem', { lineHeight: '4rem' }],
      '64/76': ['4rem', { lineHeight: '4.75rem' }],
      '66/84': ['4.125rem', { lineHeight: '5.25rem' }],
    },
  },
  plugins: [],
};
