var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var cp           = require('child_process');

gulp.task('browser-sync', function() {
  browserSync.init(['css/*.css', 'js/**/*.js', 'index.html'], {
    server: {
      baseDir: './_site'
    }
  });
});
