var gulp = require('gulp');
var argv = require('yargs').argv;

gulp.task('create_collections', function (done) {
  gulp.src(['_source_json/' + argv.source + '/_cabinets/**'])
    .pipe(gulp.dest('_cabinets'))
  gulp.src(['_source_json/' + argv.source + '/_departments/**'])
    .pipe(gulp.dest('_departments'))
  gulp.src(['_source_json/' + argv.source + '/_programs/**'])
    .pipe(gulp.dest('_programs'))
  gulp.src(['_source_json/' + argv.source + '/_categories/**'])
    .pipe(gulp.dest('_categories'))
  gulp.src(['_source_json/' + argv.source + '/_cp_depts/**'])
    .pipe(gulp.dest('_cp_depts'))
  gulp.src(['_source_json/' + argv.source + '/_projects/**'])
    .pipe(gulp.dest('_projects'))
  return;
});
