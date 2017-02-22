var gulp   = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '**/*.html', '_stylus/**/*.styl', 'js/**/*', 'images/*'],  ['build']);
  gulp.watch('_stylus/**/*.styl', ['stylus']);
});
