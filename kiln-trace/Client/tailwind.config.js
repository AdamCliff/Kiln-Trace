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
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },
    // fontWeight: {
    //   thinnest: 100,
    //   thin: 200,
    //   light: 300,
    //   normal: 400,
    //   medium: 500,
    //   semibold: 600,
    //   bold: 700,
    //   extrabold: 800,
    //   boldest: 900,
    // },
    // lineHeight: {
    //   none: "1",
    //   xs: "1.25",
    //   sm: "1.375",
    //   md: "1.5",
    //   lg: "1.625",
    //   xl: "2",
    // },
    // margin: {
    //   0.5: "0.125rem", // 2px
    //   1: "0.25rem", // 4px
    //   1.5: "0.375rem", // 6px
    //   2: "0.5rem", // 8px
    //   2.5: "0.625rem", // 10px
    //   3: "0.75rem", // 12px
    //   3.5: "0.875rem", //14px
    //   4: "1rem", //16px
    //   5: "1.25rem", //20px
    //   6: "1.5rem", //24px
    //   7: "1.75rem", //28x
    //   8: "2rem", //32px
    //   9: "2.25rem", //36px
    //   10: "2.5rem", //40px
    //   11: "2.75rem", //44px
    //   12: "3rem", //48px
    //   14: "3.5rem", //56px
    //   16: "4rem", //64px
    //   20: "5rem", //80px
    //   24: "6rem", //96px
    //   28: "7rem", //112px
    //   32: "8rem", //128px
    //   36: "9rem", //144px
    //   40: "10rem", //160px
    //   44: "11rem", //176px
    //   48: "12rem", //192px
    //   52: "13rem", //208px
    //   56: "14rem", //224px
    //   60: "15rem", //240px
    //   64: "16rem", //256px
    //   72: "18rem", //288px
    //   80: "20rem", //230px
    //   96: "24rem", //384px
    // },
    // padding: {
    //   0.5: "0.125rem", // 2px
    //   1: "0.25rem", // 4px
    //   1.5: "0.375rem", // 6px
    //   2: "0.5rem", // 8px
    //   2.5: "0.625rem", // 10px
    //   3: "0.75rem", // 12px
    //   3.5: "0.875rem", //14px
    //   4: "1rem", //16px
    //   5: "1.25rem", //20px
    //   6: "1.5rem", //24px
    //   7: "1.75rem", //28x
    //   8: "2rem", //32px
    //   9: "2.25rem", //36px
    //   10: "2.5rem", //40px
    //   11: "2.75rem", //44px
    //   12: "3rem", //48px
    //   14: "3.5rem", //56px
    //   16: "4rem", //64px
    //   20: "5rem", //80px
    //   24: "6rem", //96px
    //   28: "7rem", //112px
    //   32: "8rem", //128px
    //   36: "9rem", //144px
    //   40: "10rem", //160px
    //   44: "11rem", //176px
    //   48: "12rem", //192px
    //   52: "13rem", //208px
    //   56: "14rem", //224px
    //   60: "15rem", //240px
    //   64: "16rem", //256px
    //   72: "18rem", //288px
    //   80: "20rem", //230px
    //   96: "24rem", //384px
    // },
    // width: {
    //   0.5: "0.125rem", // 2px
    //   1: "0.25rem", // 4px
    //   1.5: "0.375rem", // 6px
    //   2: "0.5rem", // 8px
    //   2.5: "0.625rem", // 10px
    //   3: "0.75rem", // 12px
    //   3.5: "0.875rem", //14px
    //   4: "1rem", //16px
    //   5: "1.25rem", //20px
    //   6: "1.5rem", //24px
    //   7: "1.75rem", //28x
    //   8: "2rem", //32px
    //   9: "2.25rem", //36px
    //   10: "2.5rem", //40px
    //   11: "2.75rem", //44px
    //   12: "3rem", //48px
    //   14: "3.5rem", //56px
    //   16: "4rem", //64px
    //   20: "5rem", //80px
    //   24: "6rem", //96px
    //   28: "7rem", //112px
    //   32: "8rem", //128px
    //   36: "9rem", //144px
    //   40: "10rem", //160px
    //   44: "11rem", //176px
    //   48: "12rem", //192px
    //   52: "13rem", //208px
    //   56: "14rem", //224px
    //   60: "15rem", //240px
    //   64: "16rem", //256px
    //   72: "18rem", //288px
    //   80: "20rem", //230px
    //   96: "24rem", //384px
    // },
    // height: {
    //   0.5: "0.125rem", // 2px
    //   1: "0.25rem", // 4px
    //   1.5: "0.375rem", // 6px
    //   2: "0.5rem", // 8px
    //   2.5: "0.625rem", // 10px
    //   3: "0.75rem", // 12px
    //   3.5: "0.875rem", //14px
    //   4: "1rem", //16px
    //   5: "1.25rem", //20px
    //   6: "1.5rem", //24px
    //   7: "1.75rem", //28x
    //   8: "2rem", //32px
    //   9: "2.25rem", //36px
    //   10: "2.5rem", //40px
    //   11: "2.75rem", //44px
    //   12: "3rem", //48px
    //   14: "3.5rem", //56px
    //   16: "4rem", //64px
    //   20: "5rem", //80px
    //   24: "6rem", //96px
    //   28: "7rem", //112px
    //   32: "8rem", //128px
    //   36: "9rem", //144px
    //   40: "10rem", //160px
    //   44: "11rem", //176px
    //   48: "12rem", //192px
    //   52: "13rem", //208px
    //   56: "14rem", //224px
    //   60: "15rem", //240px
    //   64: "16rem", //256px
    //   72: "18rem", //288px
    //   80: "20rem", //230px
    //   96: "24rem", //384px
    // },
    // boxShadow: {
    //   sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    //   DEFAULT:
    //     "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    //   md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    //   // Other values up to 3xl...
    //   "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    // },
    // borderRadius: {
    //   none: "0",
    //   sm: "0.125rem", // 2px
    //   DEFAULT: "0.25rem", // 4px
    //   // Other values up to full...
    //   full: "9999px",
    // },
    // borderWidth: {
    //   DEFAULT: "1px",
    //   0: "0",
    //   2: "2px",
    //   // Other values up to 8...
    //   8: "8px",
    // },
    // opacity: {
    //   0: "0",
    //   5: "0.05",
    //   10: "0.1",
    //   // Other values up to 100...
    //   100: "1",
    // },
    extend: {
      colors: {
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

// OLD COLORS
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
// black: "#100C08",
// white: "#fefaf5",
// // orange: "#eb9100",
// orange: "#E87A00",
// // blue: "#005aeb",
// blue: "#001F3D",
// // lightBlue: "#7bbfcc",
// lightBlue: "#045174",

/* color scheme v2 */
// text: "#100C08",
// background: "#fefaf5",
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
