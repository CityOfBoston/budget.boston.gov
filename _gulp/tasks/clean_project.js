var gulp  = require('gulp');
const del = require('del');

gulp.task('clean_project', function (done) {
  del.sync(['_cabinets/**']);
  del.sync(['_departments/**']);
  del.sync(['_programs/**']);
  del.sync(['_categories/**']);
  del.sync(['_cp_depts/**']);
  del.sync(['_projects/**']);
  del.sync(['_pages/**']);
  del.sync(['img/**']);
  return;
});
