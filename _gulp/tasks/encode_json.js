var gulp = require('gulp');
var convertEncoding = require('gulp-convert-encoding');
 
gulp.task('encode_json', ['create_collections'], function () {
       gulp.src('_cabinets/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_cabinets/.'))
       gulp.src('_departments/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_departments/.'))
       gulp.src('_programs/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_programs/.'))
       gulp.src('_categories/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_categories/.'))
       gulp.src('_cp_depts/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_cp_depts/.'))
       gulp.src('_projects/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_projects/.'))
});
