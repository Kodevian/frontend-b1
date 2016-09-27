var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var __dir__ = './assets/';
var reload = browserSync.reload;
var path = {
   style: [__dir__ + 'sass/main.scss']
}
gulp.task('sass', function () {
   return gulp.src(__dir__ + "sass/**/*.scss")
      .pipe(sass({
         outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(gulp.dest(__dir__ + 'css/'))
      .pipe(reload({
         stream: true
      }))
});
gulp.task('server', function () {
   browserSync.init({
      server: {
         baseDir: "./",
         browser: ['google-chrome']
      }
   });
});
gulp.task('watch', function () {
   gulp.watch(__dir__ + 'sass/**/*.scss', ['sass']);
   gulp.watch('./*.html',reload)
});

gulp.task('default', ['sass', 'server','watch'])
