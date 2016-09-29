var gulp = require('gulp');
var bump = require('gulp-bump');

gulp.task('pre-commit', function() {
  console.log('Bumpig up the versions');
  gulp.src(['./package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});