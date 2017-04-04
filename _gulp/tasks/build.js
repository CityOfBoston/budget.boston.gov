var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var argv         = require('yargs').argv;
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('build', ['download_wrapper', 'create_content', 'jekyll', 'stylus']);
