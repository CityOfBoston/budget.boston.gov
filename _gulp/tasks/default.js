var gulp   = require('gulp');

gulp.task('default', ['download', 'create_collections', 'build', 'watch', 'browser-sync', 'stylus']);
