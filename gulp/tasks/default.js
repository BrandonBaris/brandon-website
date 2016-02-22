'use strict';
// Gulp tasks starts here
var gulp = require('gulp');
// TODO: Refactoring when Gulp 4.x.x is released
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function() {
  if (release) {
    runSequence(
      ['index', 'styles', 'images', 'assets', 'lint'],
      'browserify', ['minify', 'serve']
    );
  } else {
    runSequence( 
      ['index', 'styles', 'images', 'assets', 'lint'], ['watchify','watch','serve']
    );
  }
});