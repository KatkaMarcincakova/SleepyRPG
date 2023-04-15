/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
    darkMode: 'class',
    theme: {
        screens: {
            xxs: '340px',
            xs: '410px',
            sm: '480px',
            s: '590px',
            md: '720px',
            m: '840px',
            lg: '976px',
            l: '1200px',
            xl: '1440px'
        },
        extend: {
            colors: {
                mainDark: 'hsl(228, 20%, 20%)',
                mainLight: 'hsl(214, 22%, 50%)',
                greenDark: 'hsl(154, 37%, 30%)',
                green: 'hsl(101, 40%, 59%)',
                greenLight: 'hsl(95, 75%, 89%)'
            }
        },
    },
    plugins: [],
}