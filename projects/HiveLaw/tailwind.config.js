/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'blue-50': '#ebeced',
        'blue-100': '#bfc3c8',
        'blue-200': '#a1a6ae',
        'blue-300': '#767e88',
        'blue-400': '#5b6571',
        'blue-500': '#323e4e',
        'blue-600': '#2e3847',
        'blue-700': '#242c37',
        'blue-800': '#1c222b',
        'blue-900': '#151a21',
        'white-50': '#fbfbfb',
        'white-100': '#f3f3f3',
        'white-200': '#eeeeee',
        'white-300': '#e6e6e6',
        'white-400': '#e1e1e1',
        'white-500': '#d9d9d9',
        'white-600': '#c5c5c5',
        'white-700': '#9a9a9a',
        'white-800': '#777777',
        'white-900': '#5b5b5b',
        'skyblue-50': '#f0f8fc',
        'skyblue-100': '#d1e9f7',
        'skyblue-200': '#badff3',
        'skyblue-300': '#9bd0ee',
        'skyblue-400': '#88c7ea',
        'skyblue-500': '#6ab9e5',
        'skyblue-600': '#60a8d0',
        'skyblue-700': '#4b83a3',
        'skyblue-800': '#3a667e',
        'skyblue-900': '#2d4e60',
      },
      fontFamily: {
        'sans': ['inter', 'sans-serif'],
      },
      fontSize: {
        'heading': '22.65px',
        'subheading': '14px',
        'body': '8.65px',
        'caption': '5.35px',
      },
    },
  },
  plugins: [],
}

