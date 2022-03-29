module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width :{
      '40': "250px",
      '50': "50%",
      '60':"60%",
      '100':"100%",
      '80':"80%",
      '90':"90%",
      '70':"70%"
      },
      colors :{
        "bgCol":"#F9F9F9",
        blue: {
          300: '#0000ff'
        }
      }
    },
   
  },
  plugins: [],
}
