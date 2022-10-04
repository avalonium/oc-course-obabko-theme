let defaultTheme = require('tailwindcss/defaultTheme');
let containerScreens = Object.assign({}, defaultTheme.screens);

delete containerScreens['2xl']

module.exports = {
    mode: 'jit',
    content: [
        './content/**/*.htm',
        './layouts/**/*.htm',
        './pages/**/*.htm',
        './partials/**/*.htm'
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
                screens: containerScreens
            },
            textColor: '#131E31',
            colors: {
                'custom-black': '#131E31',
                'custom-sky': '#F5FAFF',
                'custom-blue': '#335791'
            },
            boxShadow: {
                custom: '0 16px 40px rgba(51, 87, 145, 0.1)',
            },
            fontFamily: {
                sans: ['Manrope', ...defaultTheme.fontFamily.sans]
            }
        }
    }
}