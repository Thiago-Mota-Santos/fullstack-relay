// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'custom-0':
        'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
      'sm-0': '0 0 0 1px hsl(252, 71.0%, 83.7%)',
      'mauve-0': '0 0 0 2px hsl(271, 3.9%, 86.3%)',
      'red-0': '0 0 0 2px hsl(359, 74.2%, 81.7%)',
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        overlay: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        content: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        overlayShow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        contentShow: {
          '0%': { opacity: 0, translate: ('-50%', '-48%'), scale: '0.96' },
          '100%': { opacity: 1, translate: ('-50%', '-50'), scale: '1' },
        },
      },
      'accordion-down': {
        from: { height: 0 },

        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },

        to: { height: 0 },
      },
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(rgb(127, 29, 29))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
