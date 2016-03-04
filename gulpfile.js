var gulp 		     = require('gulp'),
	 sass 		     = require('gulp-sass'),
	 watch 		     = require('gulp-watch'),
	 browserSync   = require('browser-sync').create();

gulp.task('scss', function () {
 return gulp.src('scss/*.scss')
          .pipe(sass().on('error', sass.logError))
          //.pipe(sass({outputStyle: 'compressed'})) 
          .pipe(gulp.dest('css'))
          .pipe(browserSync.stream());
});
 
gulp.task('watch', function () { 
   browserSync.init({ 
        proxy: "http://larry/bootstrap-gulp" 
    });	 

  gulp.watch('**/*.scss', ['scss']); 
  gulp.watch("**/*.*").on('change', browserSync.reload); 
});

gulp.task('default', ['watch']); 
