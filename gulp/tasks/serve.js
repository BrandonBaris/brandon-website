'use strict';

var gulp = require('gulp');
var connect = require('connect');
var serveStatic = require('serve-static');
var staticServer = connect();

module.exports = gulp.task('serve', function(next) {
  var staticServerPath = BUILD_FOLDER;
  if (release){
    staticServerPath = RELEASE_FOLDER;
  }
  console.log("SERVING FOLDER ", staticServerPath );
  staticServer.use(serveStatic(staticServerPath)).listen(process.env.PORT || config.ports.staticServer, next);
});