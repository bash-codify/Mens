
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
        'w19': "30rem",
        // 'w26': "25.8rem",
        // 'w27': "27rem",
      },
      
      height:{

       'h90': "90vh",
       'h80': "80vh",
       'h85': "85vh",
       'h40': "40vh",
       'h10': "10vh",
       'h20': "20vh",
       'h19': "19rem",
       'h21': "21rem",
       'h22': "22rem",
       'h26': "26rem",
       'h30': "30rem",
       'h33': "33rem",
       'h35': "35rem",
      },

      screens: {

          'S360': "360px",
          'S500': "500px",
          'S600': "600px",
          'S700': "700px",
          'S768': "768px",
          'S960': "960px",
          'S1024': "1024px",
          'S1200': "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};