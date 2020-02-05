var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    del          = require('del'),
    cleanCSS     = require('gulp-clean-css');

gulp.task('sass', function() {
	return gulp.src('app/scss/style.scss')
	.pipe(sass())
    .pipe(autoprefixer(['last 10 versions'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
});

gulp.task('minify-css', function() {
  return gulp.src('app/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('prebuild', gulp.series('code', 'sass', 'minify-css'), function() {
});

gulp.task('build', async function() {

    var buildCss = gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildLibs = gulp.src('app/libs/**/*')
    .pipe(gulp.dest('dist/libs'))

    var buildImg = gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('default', gulp.parallel('sass', 'watch'));