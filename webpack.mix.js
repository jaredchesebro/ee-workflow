// webpack.mix.js

let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

mix.options({
    processCssUrls: false,
});

mix.setPublicPath('public_html');

mix.js('src/js/scripts.js', 'assets/js');
mix.sass('src/scss/styles.scss', 'assets/css')
mix.sourceMaps(false, 'source-map');
//mix.copy('src/fonts', 'public_html/dist/fonts');
//mix.copy('src/images', 'public_html/dist/images');
