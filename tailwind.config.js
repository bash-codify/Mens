
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width:{

        'w94': "94%",
        'w95': "95%",
        'w90': "90%",
        'vh90': "90vh",
        'w85': "85%",
        'w80': "80%",
        'w75': "75%",
        // 'w10': "10%",
        // 'w6': "6%",
        // 'w26': "25.8rem",
        // 'w27': "27rem",
      },
      
      height:{

       'h90': "90vh",
       'h80': "80vh",
       'h85': "85vh",
       'h40': "40vh",
       'h10': "10vh",
      //  'h26': "26rem",
      //  'h30': "30rem",
      //  'h35': "35rem",
      },

      screens: {

          xs: "360px",
          ss: "500px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};