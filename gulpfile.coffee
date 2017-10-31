autoprefixer = require('gulp-autoprefixer')
browserSync = require('browser-sync').create()
del = require 'del'
gulp = require 'gulp'
sass = require 'gulp-sass'
sourceMaps = require 'gulp-sourcemaps'

PATH =
  APP: './app'
  DIST: './dist'

PATH.INDEX = "#{PATH.APP}/index.html"
PATH.STYLES = "#{PATH.APP}/styles"
PATH.CSS = "#{PATH.DIST}/css"

gulp.task 'clean', ->
  del [PATH.DIST + '/**/*']

gulp.task 'html', ->
  gulp.src PATH.INDEX
    .pipe gulp.dest PATH.DIST

gulp.task 'reload-html', ['html'], -> browserSync.reload()

gulp.task 'style', ->
  gulp.src "#{PATH.STYLES}/app.scss"
    .pipe sourceMaps.init()
    .pipe sass()
    .on 'error', sass.logError
    .pipe autoprefixer {browsers: '> 1% in CN, iOS 7'}
    .pipe sourceMaps.write './'
    .pipe gulp.dest PATH.CSS
    .pipe browserSync.stream()

gulp.task 'watch', ['html', 'style'], ->
  gulp.watch PATH.INDEX, ['reload-html']
  gulp.watch "#{PATH.STYLES}/**/*.{scss,sass}", ['style']

gulp.task 'server', ['watch'], ->
  browserSync.init
    open: true
    browser: "chromium-browser"
    server:
      baseDir: PATH.DIST

gulp.task 'default', ['server']
