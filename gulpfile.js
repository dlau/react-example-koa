var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('gulp-browserify');
var react = require('gulp-react');


gulp.task('browserify', function(){
  gulp.src('pagejs/*.js')
    .pipe(browserify({
      transform : ['reactify']
    }))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('jsxcompile', function(){
  gulp.src('components/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('components'));
});

gulp.task('watch', function(){
  gulp.watch('components/*.js', ['browserify']);
  gulp.watch('components/*.jsx', ['jsxcompile','browserify']);
});


gulp.task('dev', ['browserify','jsxcompile','watch'], function(){
  nodemon({script:'index.js', options: '--harmony-generators --debug'});
});

gulp.task('default',['browserify','jsxcompile']);

