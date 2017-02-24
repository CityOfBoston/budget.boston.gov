var gulp   = require('gulp');

gulp.task('default', ['download', 'build', 'watch', 'browser-sync', 'stylus']);
