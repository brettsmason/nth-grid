var gulp    = require('gulp');
var plugins = require('gulp-load-plugins');
var browser = require('browser-sync');

var $ = plugins();

// Build the SCSS into CSS
gulp.task('build', gulp.parallel(copy, sass));

// Build the SCSS, watch for changes.
gulp.task('default',
gulp.series('build', server, watch));

// Copy demo index file
function copy() {
  return gulp.src(['demo/**/*.html'])
    .pipe(gulp.dest('dist'));
}

function sass() {
  return gulp.src('demo/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: ['sass']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: [ "last 2 versions", "ie >= 10", "ios >= 7" ]
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browser.reload({ stream: true }));
  }

// Start a server with BrowserSync to preview the site in
function server(done) {
  browser.init({
    server: 'dist', port: 8000
  });
  done();
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}
// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  gulp.watch(['sass/**/*.scss', 'demo/**/*.scss']).on('all', sass);
  gulp.watch('demo/**/*.html').on('all', gulp.series(copy, browser.reload));
}
