var gulp  = require('gulp');
const del = require('del');

gulp.task('clean_project', function (done) {
  del.sync(['_cabinets/**']);
});
