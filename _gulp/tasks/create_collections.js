var gulp = require('gulp');

gulp.task('create_collections', function (done) {
  gulp.src(['_json/fy17/_cabinets/**'])
    .pipe(gulp.dest('_cabinets'))
  gulp.src(['_json/fy17/_departments/**'])
    .pipe(gulp.dest('_departments'))
  gulp.src(['_json/fy17/_programs/**'])
    .pipe(gulp.dest('_programs'))
  gulp.src(['_json/fy17/_categories/**'])
    .pipe(gulp.dest('_categories'))
  gulp.src(['_json/fy17/_cp_depts/**'])
    .pipe(gulp.dest('_cp_depts'))
  gulp.src(['_json/fy17/_projects/**'])
    .pipe(gulp.dest('_projects'))
});
