import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          bg: "#F7F4EC",
          surface: "#FFFFFF",
          muted: "#EFEAE0",
          primary: "#1B4332",
          primaryHover: "#2D6A4F",
          accent: "#74C69D",
          earth: "#B7791F",
          sand: "#E9DCC9",
          text: "#1B2A24",
          textMuted: "#5C6B63",
          danger: "#C0392B",
        },
      },
    },
  },
  plugins: [],
};

export default config;