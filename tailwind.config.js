/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ["Poppins"]
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        myTheme:{
          "primary": "#191919",
          "secondary": "#EFEFEF",
          "text":"#666666",
          "accent": "#FF9F4D",
          "neutral": "#666666",
          "info":"#975CC0",
          "success":"#F95F73",
          "warning":"#FF8956",
        },
      }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

