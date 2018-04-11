var gulp = require('gulp');
var argv = require('yargs').argv;

gulp.task('create_content', function (done) {
  gulp.src(['_source/' + argv.source + '/json/_cabinets/**'])
    .pipe(gulp.dest('_cabinets'));
  gulp.src(['_source/' + argv.source + '/json/_departments/**'])
    .pipe(gulp.dest('_departments'));
  gulp.src(['_source/' + argv.source + '/json/_programs/**'])
    .pipe(gulp.dest('_programs'));
  gulp.src(['_source/' + argv.source + '/json/_categories/**'])
    .pipe(gulp.dest('_categories'));
  gulp.src(['_source/' + argv.source + '/json/_cp_depts/**'])
    .pipe(gulp.dest('_cp_depts'));
  gulp.src(['_source/' + argv.source + '/json/_projects/**'])
    .pipe(gulp.dest('_projects'));
  gulp.src(['_source/' + argv.source + '/md/**'])
    .pipe(gulp.dest('_pages'));
  gulp.src(['_source/' + argv.source + '/img/**'])
    .pipe(gulp.dest('img'));
  gulp.src(['_source/' + argv.source + '/json/_chapters/**'])
    .pipe(gulp.dest('_chapters'));
  done();
});
