const { src, dest } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build(cb) {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
}

exports.build = build;
exports.default = build;
