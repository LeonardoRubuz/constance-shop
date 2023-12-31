import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      'sombre' : "#004455",
      'beige' : "#f9cfa6",
      'bleu' : "#5be1e4",
      'noir' : "#0d1117",
      'blanc' : "#ffffff"
    },
    fontFamily : {
      'titles' : ['Poppins', 'sans-serif'],
      'texts' : ['Roboto', 'serif']
    },
    fontSize : {
      sm : '0.8rem',
      base : '1rem',
      xl : '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg' : 'url(/image-1.jpg)'
      },
    },
  },
  plugins: [],
}
export default config
