var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('replace_special_chars', ['create_collections'], function(done){
  gulp.src(['_cabinets/**'])
    .pipe(replace('§', '&sect;'))
    .pipe(gulp.dest('_cabinets/.'));
  gulp.src(['_departments/**'])
    .pipe(replace('§', '&sect;'))
    .pipe(gulp.dest('_departments/.'));
  gulp.src(['_programs/**'])
    .pipe(replace('§', '&sect;'))
    .pipe(gulp.dest('_programs/.'));
  gulp.src(['_categories/**'])
    .pipe(replace('§', '&sect;'))
    .pipe(gulp.dest('_categories/.'));
  gulp.src(['_cp_depts/**'])
    .pipe(replace('§', '&sect;'))
    .pipe(gulp.dest('_cp_depts/.'));
  gulp.src(['_projects/**'])
    .pipe(replace('§', '&sect;'))
    .pipe(gulp.dest('_projects/.'));
  done();
});
