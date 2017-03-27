var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var cp           = require('child_process');
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('build', ['stylus', 'encode_json'], function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build', '--config', '_config_dev.yml'], {stdio: 'inherit'}).on('close', done);
});
