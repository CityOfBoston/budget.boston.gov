var gulp = require('gulp');
var insert = require('gulp-insert');
 
gulp.task('wrap_json', ['encode_json'], function () {
    return gulp.src('_cabinets/**')
        //.pipe(insert.transform(function(contents, file) {
        //  var newLine = '\n';
        //  return newLine + contents;
        //}))
        //.pipe(insert.prepend('---'))
        //.pipe(insert.append('---'))
        .pipe(insert.wrap('---', '---'))
        .pipe(gulp.dest('_cabinets/.'));
});
