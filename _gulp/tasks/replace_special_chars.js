var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('replace_special_chars', ['create_collections'], function(done){
  gulp.src(['_cabinets/**'])
    //.pipe(replace('file_version', 'REPLACEDDDD'))
    //.pipe(replace('§', '\xC2\xA7'))
    .pipe(replace('§', 'REPLACED'))
    .pipe(gulp.dest('_cabinets/.'));
  gulp.src(['_departments/**'])
    .pipe(replace('§', 'REPLACED'))
    .pipe(gulp.dest('_departments/.'));
  gulp.src(['_programs/**'])
    .pipe(replace('§', 'REPLACED'))
    .pipe(gulp.dest('_programs/.'));
  gulp.src(['_categories/**'])
    .pipe(replace('§', 'REPLACED'))
    .pipe(gulp.dest('_categories/.'));
  gulp.src(['_cp_depts/**'])
    .pipe(replace('§', 'REPLACED'))
    .pipe(gulp.dest('_cp_depts/.'));
  gulp.src(['_projects/**'])
    .pipe(replace('§', 'REPLACED'))
    .pipe(gulp.dest('_projects/.'));
  done();
});
