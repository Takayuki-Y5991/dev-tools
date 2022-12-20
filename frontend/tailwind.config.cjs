/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-purple': '#81A51',
                'light-white': 'rgba(255,255,255,0.17)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow': {
                    textShadow: '1px 1px 7px',
                },
                '.border-right': {
                    borderRight: '1px solid white',
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
