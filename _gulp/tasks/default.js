var gulp   = require('gulp');

gulp.task('default', ['download', 'encode_json', 'wrap_json', 'build', 'watch', 'browser-sync', 'stylus']);
