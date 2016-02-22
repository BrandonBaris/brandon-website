'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cached'),
  remember = require('gulp-remember');

module.exports = gulp.task('images', function() {
  return gulp.src(config.paths.src.images)
    .pipe(cache('images'))
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.images))
    .pipe(remember('images'))
    .pipe(gulp.dest(config.paths.dest.build.images)));
});