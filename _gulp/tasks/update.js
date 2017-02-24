var gulp = require('gulp');
var injectElement = require('gulp-inject-element');

gulp.task('update', ['download'], function() {
  var src = './_layouts/bos_wrapper.html',
      dst = './_layouts/bos_wrapper.html',
      opts = {
        uses: 'dom',
        find: ['base', 'title'],
        injectStrings: ['<base>empty</base>', 'test']
      };

  gulp.src(src)
    .pipe(injectElement(opts))
    .pipe(gulp.dest(dst));
});
