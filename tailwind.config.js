/** @type {import('tailwindcss').Config} */

const colors = {
    border: '#dce1e6',
    'input-border': '#0000001f',
    'input-border2': '#00000045',
    text: '#304156',
    gray: '#828D99',
    red: '#D3153D',
    primary: '#447bba',
    bg: '#edeef0',
    dark: '#222a32',
    black: '#000',
    white: '#fff'
}
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}