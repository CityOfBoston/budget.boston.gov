var gulp = require('gulp');
var convertEncoding = require('gulp-convert-encoding');
 
gulp.task('encode_json', function () {
    return gulp.src('_cabinets/**')
        .pipe(convertEncoding({to: 'ISO-8859-1'}))
        .pipe(gulp.dest('_cabinets/.'));
});
