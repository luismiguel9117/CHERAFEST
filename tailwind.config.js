/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        melody: {
          pink: '#ef7fae',
          lightpink: '#fff0f6',
          bgpink: '#fff2f6',
          hotpink: '#f78ab6',
          darkpink: '#d4699b',
          deep: '#b7407a',
          purple: '#bda3e8',
          lightpurple: '#f5eeff',
          textpurple: '#8a63b8',
          textdark: '#7a4a63',
          cardborder: '#ffd0e2',
        }
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        fredoka: ['"Fredoka"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'pink-3d': '0 8px 0 rgba(247, 138, 182, 0.4)',
        'purple-3d': '0 8px 0 rgba(189, 163, 232, 0.4)',
        'soft-pink': '0 10px 25px -5px rgba(239, 127, 174, 0.25)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
