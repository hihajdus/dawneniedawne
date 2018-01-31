var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('reload', function() {
	browserSync.reload();
});

gulp.task('serve', ['sass'], function() {
	browserSync({
		server: 'src'
	});
	gulp.watch('src/*.html', ['reload']);
	gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*.*')
    .pipe(imagemin({optimizationLevel: 7, progressive: true}))
    .pipe(gulp.dest('dist/images'));
});
 
gulp.task('default', ['serve']);


// gulp.task('default');
