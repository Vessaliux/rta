import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                default: '#2b2f32',
                body: '#484f54',
                'body-light': '#727c84',
                light: '#a8afb4',
            },
            fontFamily: {
                'noto-sans': ['var(--font-noto-sans)'],
                'libre-franklin': ['var(--font-libre-franklin)'],
            },
            height: {
                footer: '200px',
                'footer-mobile': '385px',
            },
            maxWidth: {
                content: '992px',
            },
            transitionDuration: {
                DEFAULT: '400ms',
            },
        },
    },
    plugins: [
        ({ addUtilities }: any) => {
            addUtilities({
                '.forced-center': {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
            });
        },
    ],
};
export default config;
