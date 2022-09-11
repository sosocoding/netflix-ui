const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const path = require('path');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          tailwindcss(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        extract: true,
        // Or with custom file name
        extract: path.resolve('dist/styles.css'),
      })
    );
    return config;
  },
};
