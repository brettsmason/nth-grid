var gulp    = require('gulp');
var plugins = require('gulp-load-plugins');
var browser = require('browser-sync');
var rimraf = require('rimraf');

var $ = plugins();

// Visual tests task
gulp.task('visual', gulp.series(cleanVisual, sassVisual, serverVisual, watchVisual));

// Docs task
gulp.task('docs', gulp.series(sassDocs, serverDocs, watchDocs));

/////////////////
// Visual Testing
/////////////////

// Clean the visual test css files
function cleanVisual(done) {
  rimraf('tests/visual/**/*.css', done);
}

// Compile visual test Sass files
function sassVisual() {
  return gulp.src('tests/visual/**/*.scss')
    .pipe($.sass({
      includePaths: ['sass'],
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: [ "last 2 versions", "ie >= 10", "ios >= 7" ]
    }))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }))
    .pipe(browser.reload({ stream: true }));
}

// Start a server for visual tests
function serverVisual(done) {
  browser.init({
    server: 'tests/visual',
    port: 8000,
    directory: true
  });
  done();
}

// Watch for changes
function watchVisual() {
  gulp.watch(['sass/**/*.scss', 'tests/visual/**/*.scss']).on('all', sassVisual);
  gulp.watch('tests/visual/**/*.html').on('all', gulp.series(browser.reload));
}


/////////////
// Docs tasks
/////////////

// Compile Docs Sass files
function sassDocs() {
  return gulp.src('docs/assets/scss/**/*.scss')
    .pipe($.sass({
      includePaths: ['sass'],
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: [ "last 2 versions", "ie >= 10", "ios >= 7" ]
    }))
    .pipe(gulp.dest('docs/assets/css'))
    .pipe(browser.reload({ stream: true }));
}

// Start a server for the docs
function serverDocs(done) {
  browser.init({
    server: 'docs',
    port: 4000
  });
  done();
}

// Watch for changes
function watchDocs() {
  gulp.watch(['sass/**/*.scss', 'docs/assets/scss/**/*.scss']).on('all', sassDocs);
  gulp.watch(['docs/**/*.md', 'docs/**/*.html']).on('all', gulp.series(browser.reload));
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}
