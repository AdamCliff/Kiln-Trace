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
        /* base colors */
        black: "#111511",
        white: "#ebf4ed",
        whiteGreen: "#f4fbf5",
        mutedGreen: "#7e8980",
        darkGreen: "#283a2b",
        brightGreen: "#48b859",
        /* color scheme */
        text: "#111511",
        background: "#f4fbf5",
        primary: "#7e8980",
        secondary: "#283a2b",
        accent: "#48b859",

        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      // content: {
      //   'chev-down': 'u'
      // },
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
