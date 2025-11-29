/** @type {import('tailwindcss').Config} */
module.exports = {
  // 💡 Crucial: Ensure this path correctly targets all your component files
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // 💡 Ensure dark mode is set to 'class' if you support theme toggling
  darkMode: 'class', 
  
  theme: {
    extend: {
      // --- Custom Keyframes ---
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.015)' }, 
        },
        'float-y': { 
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, 
        },
        // Streamer animations for the data cube visual
        'move-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'move-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'move-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'float-jitter': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(5px, -5px) scale(1.05)' },
          '50%': { transform: 'translate(0, 10px) scale(0.95)' },
          '75%': { transform: 'translate(-5px, 5px) scale(1.03)' },
        },
        // Standard spin definitions
        'spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      
      // --- Custom Animation Utility Classes ---
      animation: {
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
        'float-slow': 'float-y 8s ease-in-out infinite',
        'float-fast': 'float-y 6s ease-in-out infinite reverse',
        'move-right': 'move-right 4s ease-in-out infinite forwards',
        'move-left': 'move-left 4s ease-in-out infinite forwards',
        'move-down': 'move-down 4s ease-in-out infinite forwards',
        'float-jitter': 'float-jitter 7s ease-in-out infinite',
        'spin': 'spin 40s linear infinite',
        'spin-reverse': 'spin-reverse 50s linear infinite',
      },
      
      // 💡 If 'perspective-1000' and 'rotate-x-60' are not working, you may need to add them as utilities:
      // transform: {
      //   'rotate-x-60': 'rotateX(60deg)',
      // },
      // screens: {
      //   'perspective-1000': { perspective: '1000px' },
      // },
    },
  },
  plugins: [],
};