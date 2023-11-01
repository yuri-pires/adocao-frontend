import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '1280px'
        }
      },
      colors: {
        lightBg: {
          DEFAULT: '#e4e4e4'
        },
        primary: {
          DEFAULT: '#08A76E',
          semiTransparent: '#08A76E44',
          hover: '#22C188'
        },
        secondary: {
          DEFAULT: '#E6B848'
        }
      }
    },
  },
  plugins: [],
}
export default config
