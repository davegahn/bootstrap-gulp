var gulp 		     = require('gulp'),
	 sass 		     = require('gulp-sass'),
	 watch 		     = require('gulp-watch');

gulp.task('scss', function () {
 return gulp.src('scss/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(sass({outputStyle: 'compressed'})) 
          .pipe(gulp.dest('css'));
});
 
gulp.task('watch', function () { 
  gulp.watch('**/*.scss', ['scss']); 
  gulp.watch("**/*.*").on('change', browserSync.reload); 
});

gulp.task('default', ['watch']); 
