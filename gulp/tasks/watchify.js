'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');

module.exports = gulp.task('watchify', function() {
  var bundler = browserify({
    entries: [config.paths.src.modules],
    cache: {},
    packageCache: {},
    plugin: [watchify],
    debug: true
  });


  bundler.transform(browserifyShim);

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle()
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});