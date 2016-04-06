const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
var testFiles = ['test/**/*test.js'];
var nonTestFiles = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js'];

gulp.task('lint:testFiles', function() {
  return gulp.src(testFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:nonTestFiles', function(){
  return gulp.src(nonTestFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint', ['lint:testFiles', 'lint:nonTestFiles']);

gulp.task('mocha', function(){
  return gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('all', ['lint', 'mocha']);

gulp.task('watch', function(){
  gulp.watch(testFiles, ['lint:testFiles', 'mocha']);
  gulp.watch(nonTestFiles, ['lint:nonTestFiles', 'mocha']);
});
