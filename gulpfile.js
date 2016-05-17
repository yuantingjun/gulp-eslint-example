var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    rename = require("gulp-rename");

gulp.task('lint', function () {
    return gulp.src(['js/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});

gulp.task('copy-pre-commit-hook', function () {
    gulp.src('.eslint-pre-commit-hook')
        .pipe(rename("pre-commit"))
        .pipe(gulp.dest('.git/hooks'));
});

gulp.task('default', ['lint'], function () {
    // This will only run if the lint task is successful...
    console.log('gulp task lint has been successful');
});
