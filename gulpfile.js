// ======================
// DEPENDENCIES
// ======================

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  sass = require('gulp-ruby-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  watch = require('gulp-watch'),
  csscomb = require('gulp-csscomb'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  uncss = require('gulp-uncss')
  merge = require('merge2'),
  imagemin = require('gulp-imagemin'),
  prettify = require('gulp-prettify'),
  runSequence = require('run-sequence').use(gulp),
  surge = require('gulp-surge'),
  fs = require('fs');

// ======================
// IMPORT CONFIG.JSON
// ======================

var config = JSON.parse(fs.readFileSync('./config.json'))

// ======================
// AUTOMATION
// ======================

var onError = function(err) {
  notify.onError({
    title: "Gulp",
    subtitle: "Failure!",
    message: "Error: <%= error.message %>",
    sound: "Beep"
  })(err);
  this.emit('end');
};

var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./test/"
    }
  });
});

gulp.task('bs-reload', function() { browserSync.reload(); });

gulp.task('watch', ['browser-sync'], function() {
  // Project Styles
  gulp.watch('styles/**/*.scss', ['styles-dev'])
  // Project Scripts
  gulp.watch('scripts/**/*.js', ['scripts-dev'])
});

// ======================
// STYLES
// ======================

// Uncss Ignore
var uncssIgnore = [
  // Required
  /(#|\.)header-nav(\-[a-zA-Z]+)?/,
  /(#|\.)dropdown--transition(\-[a-zA-Z]+)?/,
  /(#|\.)tabs--active(\-[a-zA-Z]+)?/,
  /(#|\.)nav-open(\-[a-zA-Z]+)?/
]

// Styles Development
gulp.task('styles', function() {
  return sass('./src/styles/final.scss', {})
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(
      'last 2 version',
      'safari 5',
      'firefox 15',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ message: 'DEVELOPMENT STYLES task complete' }));
});

// IE Styles
gulp.task('styles-ie', function() {
  return sass(['./src/styles/final-ie.scss'], { style: 'nested' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(autoprefixer(
      'last 2 version',
      'ie 7',
      'ie 8',
      'ie 9'
    ))
    .pipe(concat('ie.css'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ message: 'IE STYLES task complete' }));
});

// ======================
// SCRIPTS
// ======================

// Development Scripts
gulp.task('scripts', function() {
  return gulp.src(config.projectScripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ message: 'PRODUCTION SCRIPTS task complete' }));
});

// IE Scripts
gulp.task('scripts-ie', function() {
  return gulp.src(config.projectScriptsIE)
    .pipe(concat('ie.js'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ message: 'IE SCRIPTS task complete' }));
});

// ======================
// IMAGES
// ======================

gulp.task('images', function() {
  return gulp.src([
    './bower_components/final/images/**/*',
    './src/images/**/*'
  ])
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/images'))
});

// ======================
// BUILD & DEPLOY
// ======================

gulp.task('test', function(callback) {
  runSequence(
    'nunjucks',
    'styles',
    'scripts',
    'styles-ie',
    'scripts-ie',
    'images',
    callback);
});
