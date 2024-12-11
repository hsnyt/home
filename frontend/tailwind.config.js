/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // ルートのindex.html
    "./App/**/*.{js,ts,jsx,tsx}", // Appディレクトリ配下
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
