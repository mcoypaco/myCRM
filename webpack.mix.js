const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix
  .js('resources/assets/js/app.js', 'public/js/laravel.js')
  .extract([
    'jquery',
    'angular',
    'moment',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-messages',
    'angular-moment',
    'angular-ui-bootstrap',
    'angular-ui-calendar',
    'angular-ui-router'
  ])
  .sass('resources/assets/sass/app.scss', 'public/css')
  .sass('resources/assets/sass/vendor.scss', 'public/css')
  // app
  .babel([
    'public/app/app.module.js',
    'public/app/core/*.js',
    'public/app/services/*.js',
    'public/app/layout/*.js',
    'public/app/dashboard/*.js',
  ], 'public/js/app.js')
