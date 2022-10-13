'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('autoprefixer');
const sourcemaps  = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

var sassOptions = {
  outputStyle: 'expanded'
};

gulp.task('styles', () => {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(postcss([ prefix() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'));
});

gulp.task('default', gulp.series(['styles']));


gulp.task('watch', () => {
    gulp.watch('css/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});
