/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        Lightslateblue: "hsl(252, 100%, 67%)",
        Lightroyalblue: "hsl(241, 81%, 54%)",
        Violetblue: "hsla(256, 72%, 46%, 1)",
        Persianblue: "hsla(241, 72%, 46%, 0)",
        Paleblue: "hsl(221, 100%, 96%)",
        Lightlavender: "hsl(241, 100%, 89%)",
        Darkgrayblue: "hsl(224, 30%, 27%)",
        Lightred: "hsl(0, 100%, 67%)",
        Orangeyyellow: "hsl(39, 100%, 56%)",
        Greenteal: "hsl(166, 100%, 37%)",
        Cobaltblue: "hsl(234, 85%, 45%)"
      },
      minWidth: {
        small: "300px"
      }
    },
  },
  plugins: [],
}

