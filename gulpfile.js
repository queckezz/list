
var coveralls = require('gulp-coveralls')
var coverage = require('gulp-istanbul')
var sequence = require('run-sequence')
var eslint = require('gulp-eslint')
var mocha = require('gulp-mocha')
var docs = require('gulp-markdox')
var ext = require('gulp-ext')
var gulp = require('gulp')

/**
 * Test
 */

gulp.task('test', function (cb) {
  return sequence('instrument', 'mocha', cb)
})

gulp.task('test-cov', function (cb) {
  return sequence('test', 'coverage', cb)
})

gulp.task('ci', function (cb) {
  return sequence('test', 'coverage', 'coveralls')
})

gulp.task('docs', function () {
  return gulp.src('lib/index.js')
    .pipe(docs())
    .pipe(ext.replace('.md'))
    .pipe(gulp.dest('docs'))
})

gulp.task('lint', function () {
  return gulp.src('lib/*.js')
    .pipe(eslint('eslint.json'))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})

gulp.task('instrument', function () {
  return gulp.src('lib/*.js')
    .pipe(coverage())
    .pipe(coverage.hookRequire())  
})

gulp.task('mocha', function () {
  return gulp.src('test/*.js')
    .pipe(mocha({
      reporter: 'dot',
      bail: true
    }))
})

gulp.task('coverage', function () {
  return gulp.src('test/*.js')
    .pipe(coverage.writeReports())
})

gulp.task('coveralls', function () {
  return gulp.src('coverage/lcov.info')
    .pipe(coveralls())
})