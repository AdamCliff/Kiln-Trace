/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        // /* base colors */
        // black: "#111511",
        // white: "#ebf4ed",
        // whiteGreen: "#f4fbf5",
        // mutedGreen: "#7e8980",
        // darkGreen: "#283a2b",
        // brightGreen: "#48b859",
        // /* color scheme */
        // text: "#111511",
        // background: "#f4fbf5",
        // primary: "#7e8980",
        // secondary: "#283a2b",
        // accent: "#48b859",

        /* base colors v2 */
        black: "#100C08",
        white: "#fefaf5",
        // orange: "#eb9100",
        orange: "#E87A00",
        // blue: "#005aeb",
        blue: "#001F3D",
        // lightBlue: "#7bbfcc",
        lightBlue: "#045174",

        /* color scheme v2 */
        text: "#100C08",
        background: "#fefaf5",
        // primary: "#045174",
        // secondary: "#001F3D",
        // accent: "#E87A00",

        // /* base colors v3 */
        // terracotta: "#c66e4e",
        // blue: "#4ea6c6",
        // darkBlue: "#1c3b46",
        // darkTerra: "#925038",

        // /* color scheme v3 */
        // accent: "#4ea6c6",
        // // secondary: "#c66e4e",
        // primary: "#1c3b46",
        // secondary: "#925038",

        /* greyscale scheme */
        primary: "hsl(0, 0%, 41%)",
        secondary: "hsl(0, 0%, 23%)",
        accent: "hsl(0, 0%, 65%)",
        text: "hsl(0, 0%, 7%)",
        background: "hsl(0, 0%, 91%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
