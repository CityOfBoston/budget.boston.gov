var gulp = require('gulp');
var argv = require('yargs').argv;
var cp   = require('child_process');
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll', function (done) {
  if (argv.local) {
    return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'}).on('close', done);
  } else if (argv.staging) {
    return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_stg.yml'], {stdio: 'inherit'}).on('close', done);
  } else if (argv.private) {
    return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_private.yml'], {stdio: 'inherit'}).on('close', done);
  } else {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
  }
});
