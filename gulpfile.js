const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const sass = require("gulp-sass")(require("node-sass"))
const terser = require('gulp-terser');

function buildCSS() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
}
function buildImages() {
  return gulp.src('src/imgs/*')
    .pipe(gulp.dest('dist/img'))
}

function buildHTML() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
}

function buildJS() {
  return gulp.src('src/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist'))
}

function clean() {
  return del('dist/**', { force: true });
}

function build() {
  return gulp.series([
    clean,
    gulp.parallel([
      buildImages,
      buildCSS,
      buildHTML,
      buildJS
    ])
  ])
}

function start() {
  gulp.watch('src/**/*', build())
}

exports.buildHTML = buildHTML;
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.buildImages = buildImages;
exports.clean = clean;
exports.start = start;
exports.default = build();
