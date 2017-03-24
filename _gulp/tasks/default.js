var gulp   = require('gulp');

gulp.task('default', ['download', 'encode_json', 'build', 'watch', 'browser-sync', 'stylus']);
