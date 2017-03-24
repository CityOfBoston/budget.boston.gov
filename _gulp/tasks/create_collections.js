var gulp          = require('gulp');

gulp.task('create_collections', function (done) {
  gulp.src(['_json/fy17/_cabinets/**'])
    .pipe(gulp.dest('_cabinets'))
  gulp.src(['_json/fy17/_departments/**'])
    .pipe(gulp.dest('_departments'))
});
