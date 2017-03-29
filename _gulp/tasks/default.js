var gulp   = require('gulp');

gulp.task('default', ['download_wrapper', 'clean_project', 'create_content', 'convert_unicode', 'build', 'watch', 'browser-sync', 'stylus']);
