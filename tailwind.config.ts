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
      verdeEscuroGradient: "#456032",
      verdeClaro: "#30D64C",
      verdeBackground: "#60B522",
      vermelho: "#CF0E0E"
    },
    extend: {
      backgroundImage: {
        'NaturatinsMapSemFundo': "url('/assets/NaturatinsMapSemFundo.png')",
      }
    }
    },
  plugins: [],
}
export default config
