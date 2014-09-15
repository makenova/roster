var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        reload = browserSync.reload;

var watchFiles = ['./views/**/*', './public/**/*'];

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:3000",
        port: 4000
    });
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(watchFiles, reload);
});

gulp.task('default', ['watch']);