var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    lrfiles = ['./views/**/*', './public/**/*'];

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(lrfiles).on('change', livereload.changed);
});

gulp.task('default', ['watch']);
