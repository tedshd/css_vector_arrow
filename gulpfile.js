/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2016-07-05 05:07:59
 * @version $Id$
 */

const gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('autoprefixer'),
    postcssApply = require('postcss-apply'),
    postcssVar = require('postcss-css-variables'),
    postcss = require('gulp-postcss');

var cssPath = './dev/css/**/',
    build = './build/',
    processors = [
        autoprefixer({browsers: ['last 2 version']}),
        postcssApply,
        postcssVar
    ];

gulp.task('default', function (cb) {
    var options = {};
    watch(cssPath + '*.css', options, function (e) {
        console.log(new Date() + ' -- ' + e.history[0].replace(e.base, ''));
        gulp.src(cssPath + '*.css')
        .pipe(postcss(processors))
        // .pipe(cssmin())
        .pipe(gulp.dest(build));
    });
});
