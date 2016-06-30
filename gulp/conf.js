/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/,
    /\/cryptojslib\/components\/.*\.js/],
  directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

/**
 *  htmlmin require some specific options
 */
exports.htmlmin = {
  removeEmptyAttributes: true,
  removeAttributeQuotes: true,
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  // https://github.com/superbob/clicker-heroes-1.0-hsoptimizer/issues/2
  // https://github.com/twbs/bootstrap/issues/14401#issuecomment-52341142
  conservativeCollapse: true
};
