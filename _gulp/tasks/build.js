var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var cp           = require('child_process');
var argv         = require('yargs').argv;
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('build', ['stylus', 'convert_unicode'], function (done) {
  browserSync.notify(messages.jekyllBuild);
  if (argv.local) { 
    return cp.spawn('jekyll', ['build', '--config', '_config_dev.yml'], {stdio: 'inherit'}).on('close', done);
  } else {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
  }
});
