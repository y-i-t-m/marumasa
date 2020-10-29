// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    // purgecss({
    //   content: ['./src/**/*.ejs']
    // }),
    require('autoprefixer')({
      grid: true,
    }),
    require('postcss-object-fit-images'),
    require('css-declaration-sorter')({
      order: 'alphabetical',
    }),
    require('postcss-sort-media-queries')({
      sort: 'desktop-first',
    }),
  ]
}