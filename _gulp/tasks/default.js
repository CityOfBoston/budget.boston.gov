var gulp   = require('gulp');

gulp.task('default', ['download', 'create_collections', 'encode_json', 'wrap_json', 'build', 'watch', 'browser-sync', 'stylus']);
