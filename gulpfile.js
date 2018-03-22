var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {
  return gulp.src('./css/**/*.scss')
    .pipe(watch('./css/**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer("last 5 version", "> 2%"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('build', function() {
  return gulp.src('./css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer("last 5 version", "> 2%"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});