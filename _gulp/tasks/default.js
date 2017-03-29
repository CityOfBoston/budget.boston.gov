var gulp   = require('gulp');

gulp.task('default', ['download', 'clean_project', 'create_collections', 'encode_json', 'build', 'watch', 'browser-sync', 'stylus']);
