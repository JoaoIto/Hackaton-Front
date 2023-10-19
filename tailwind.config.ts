import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      cinzaClaro: "#F5F5F5",
      cinzaTraco: "#ADADAD",
      azulEscuro: "#00255B",
      azulClaroGradient: "#40BAFF",
      azulEscuroGradient: "#00255B",
      verdeEscuroGradient: "#006400",
      verdeClaro: "#30D64C",
      vermelho: "#CF0E0E"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
    },
  plugins: [],
}
export default config
