/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        alpha: {
          violet: '#667eea',
          purple: '#764ba2',
          pink: '#f093fb',
          ink: '#08061a',
          deep: '#0d0a2b',
          mid: '#16123d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'alpha-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'alpha-gradient-soft': 'linear-gradient(135deg, rgba(102,126,234,0.18) 0%, rgba(118,75,162,0.18) 50%, rgba(240,147,251,0.18) 100%)',
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-lg': '64px 64px',
        'grid-md': '40px 40px',
      },
      animation: {
        'gradient-flow': 'gradient-flow 12s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'orbit': 'orbit 30s linear infinite',
        'orbit-reverse': 'orbit 45s linear infinite reverse',
        'flow-dot': 'flow-dot 3s linear infinite',
        'caret-blink': 'caret-blink 1s step-end infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-30px) translateX(10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'flow-dot': {
          '0%': { offsetDistance: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 60px rgba(102, 126, 234, 0.4)',
        'glow-purple': '0 0 80px rgba(118, 75, 162, 0.45)',
        'glow-pink': '0 0 60px rgba(240, 147, 251, 0.35)',
        'inner-soft': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
};
