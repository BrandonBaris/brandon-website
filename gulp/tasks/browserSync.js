var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  console.log('browser-sync');
  browserSync.watch( BUILD_FOLDER + "*.html" ).on("change", browserSync.reload);
  browserSync.watch( BUILD_FOLDER + '/**/*.js', function (event, file) {
      if (event === "change") {
          browserSync.reload("*.js");
      }
  });

  browserSync.watch( BUILD_FOLDER + '/**/*.css', function (event, file) {
      if (event === "change") {
          browserSync.reload("*.css");
      }
  });
  
  // STATIC BUILD SERVER
  browserSync.init({
        server: ( release )?RELEASE_FOLDER:BUILD_FOLDER
    });
});
