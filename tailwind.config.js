/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontSize: {
        'number80': '80px',   // Desktop
        'title48': '48px',    // Desktop
        'subTitle38': '38px',   // Desktop
        'subTitle24': '24px',   // Desktop
        'name20': '20px',    // Desktop
        'text18': '18px',     // Desktop

        'number60': '60px',   // Table
        'title36': '36px',  // Table
        'subTitle28': '28px',  // Table
        'subTitle24': '24px',  // Table
        'name20': '20px',   // Table
        'text16': '16px',    // Table
        'text14': '14px',    // Table

        'number50': '50px',   // Mobile
      },
      fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    
    screens: {
      'mobil': {'max':'360px'},
      // => @media (max-width: 360px) { ... }
      
      'mobil2': {'max':'640px'},
      // => @media (max-width: 640px) { ... }

      'mobile3': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'table': {'max':'1024px'} ,
      // => @media (max-width: 1024px) { ... }

      'desktop': {'max':'1280px'} ,
      // => @media (max-width: 1280px) { ... }
    },
    colors: {
      white: "#fff",
      black: "#000",
      primary: "#FF9500",
      secondary:"#FFBF66",
      shadow: "#E4E4E7"


    },
  
    extend: {
      spacing: {
        '8': '8px',
        '10': '10px',
        '14': '14px',
        '12': '12px',
        '16': '16px',
        '18': '18px',
        '32': '32px',
        '40': '40px',
        '50': '50px',
        '80': '80px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '250': '250px',
      },
      borderRadius:{
        '6': "6px",
        '8': "8px",
      },
      borderColor:{
        'color1': "#FFD599",

      },
      
    },
  },
  plugins: [],
}

