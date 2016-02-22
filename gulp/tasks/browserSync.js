var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
        server: ( release )?RELEASE_FOLDER:BUILD_FOLDER
    });
});
