var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var cp           = require('child_process');

gulp.task('browser-sync', ['convert_unicode'], function() {
  browserSync.init(['css/*.css', 'js/**/*.js', 'index.html'], {
    open: false,
    port: 4000,
    server: {
      baseDir: './_site',
    }
  });
});
