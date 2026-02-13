// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers your new src structure!
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050505",
          // The vibrant green from your logo
          green: "#39FF14", 
          // A deeper version for gradients
          greenDeep: "#15803d",
          // The silver/chrome gray from the text
          silver: "#C0C0C0", 
        },
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;