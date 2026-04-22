import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          slate: "#0B1020"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(34, 211, 238, 0.18)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.35), transparent 40%), linear-gradient(180deg, #020617 0%, #0B1020 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
