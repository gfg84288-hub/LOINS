export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(255, 42, 42, 0.16)',
        panel: '0 20px 60px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(255, 42, 42, 0.22), transparent 32%), radial-gradient(circle at 80% 10%, rgba(255, 75, 75, 0.14), transparent 28%)',
      },
      colors: {
        surface: '#141414',
        panel: '#101010',
        border: 'rgba(255,255,255,0.08)',
        soft: '#9d9d9d',
      },
    },
  },
  plugins: [],
};
