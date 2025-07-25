/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
  extend: {
    screens: {
      'xs': '360px',
    }
  },
},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};


// theme: {
// 		extend: {
// 			//  keyframes: {
//       //   wiggle: {
//       //     '0%, 100%': { transform: 'rotate(-3deg)' },
//       //     '50%': { transform: 'rotate(3deg)' },
//       //   },
//       // },
//       // animation: {
//       //   wiggle: 'wiggle 0.5s ease-in-out infinite',
//       // },
// 		},
// 	},