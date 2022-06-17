module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      '.hover\:animate-ping:hover': {
    'animation': 'ping 5s cubic-bezier(0, 0, 0.5, 1) infinite'
}
    },
  },
  plugins: [],
};
