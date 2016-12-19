var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  data = require('gulp-data'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  autoprefxier = require('gulp-autoprefixer');

gulp.task('connect', function(){
  connect.server({
    root: '../',
    livereload: true,
    port: 8080
  });
});

gulp.task('js-watch', function(){
  gulp.src('./js/*.js')
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  gulp.src('../stylesheets/sass/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefxier({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('../stylesheets/dist/'))
  .pipe(connect.reload());
});

gulp.task('jade', function(){
  gulp.src('../jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('../html/'))
  .pipe(connect.reload())
});

gulp.task('watch', function(){
  gulp.watch(['../jade/**/*.jade'], ['jade']);
  gulp.watch(['../js/*.js'], ['js-watch']);
  gulp.watch(['../stylesheets/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'sass', 'jade', 'js-watch', 'watch']);
