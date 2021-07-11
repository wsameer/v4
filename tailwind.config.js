const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['.public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
        }
    },
    darkMode: 'media',
    plugins: [],
    variants: {
        extend: {
            fontSmoothing: ['hover', 'focus']
        }
    }
};
