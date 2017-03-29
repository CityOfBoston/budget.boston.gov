var gulp = require('gulp');
var entityconvert = require('gulp-entity-convert');

gulp.task('convert_unicode', function () {
    gulp.src('_cabinets/**')
        .pipe(entityconvert())
        .pipe(gulp.dest('_cabinets/.'));
    gulp.src('_departments/**')
        .pipe(entityconvert())
        .pipe(gulp.dest('_departments/.'));
    gulp.src('_programs/**')
        .pipe(entityconvert())
        .pipe(gulp.dest('_programs/.'));
    gulp.src('_categories/**')
        .pipe(entityconvert())
        .pipe(gulp.dest('_categories/.'));
    gulp.src('_cp_depts/**')
        .pipe(entityconvert())
        .pipe(gulp.dest('_cp_depts/.'));
    gulp.src('_projects/**')
        .pipe(entityconvert())
        .pipe(gulp.dest('_projects/.'));
});
