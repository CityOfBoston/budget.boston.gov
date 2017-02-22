var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var cp           = require('child_process');
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var download = require("gulp-download-stream");
download({
  file: "bos_wrapper.html",
  url: "http://0.0.0.0/api/v1/layouts/generic"
})
.pipe(gulp.dest("_layouts/"));

gulp.task('build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});
