'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint');

module.exports = gulp.task('lint', function() {
  return gulp.src(config.paths.src.scripts)
    .pipe(eslint({
      "parser": "babel-eslint",
      "rules": {
        "strict": 0
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});