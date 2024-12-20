import { Config } from 'tailwindcss'
import uaiPreset from './src/@uai/tailwind.preset'

export default {
  presets: [ uaiPreset ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
