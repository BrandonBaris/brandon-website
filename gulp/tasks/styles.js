'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    precss = require('precss'),
    cssnext = require('postcss-cssnext'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano');

module.exports = gulp.task('styles', function() {
  var processors = [
    precss,
    cssnext,
    mqpacker
  ];

  return gulp.src(config.paths.src.styles)
    .pipe(postcss(processors))
    .pipe(gulpif(release, postcss([ cssnano ])))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});