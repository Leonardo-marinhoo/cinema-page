const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function buildStyles(){
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles'))
}

function compress_image(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(buildStyles, compress_image)

exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(buildStyles));
}