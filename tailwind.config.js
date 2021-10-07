// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './safelist.txt',
      'node_modules/@nujek/**/*.vue'
    ]
  },
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
}
