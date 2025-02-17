// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
        "others":{'min':'340px','max':'1200px'}
      },
      colors:{
        darkbg:"#1E293B",
      }
    },
  },
  plugins: [],
}
