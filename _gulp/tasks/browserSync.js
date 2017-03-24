var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var cp           = require('child_process');

gulp.task('browser-sync', function() {
  browserSync.init(['css/*.css', 'js/**/*.js', 'index.html'], {
    //open: false,
    //host: '127.0.0.1',
    //proxy: '127.0.0.1',
    port: 4000,
    server: {
      baseDir: './_site',
    }
  });
});
