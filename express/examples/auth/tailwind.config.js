/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/views/**/*.pug", "./resources/ts/**/*.vue"],
    theme: {
        extend: {
            colors:{
                primary:"#FFFFFF"
            }
        },
    },
    plugins: [],
};
