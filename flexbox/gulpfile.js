const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

function clean() {
    return del('master.css')
}

function styles() {
    return gulp.src('css/master.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./'))
}

function watch() {
    gulp.watch('css/*.css', styles)
}
exports.styles = styles;
exports.clean = clean;
exports.watch = watch;

gulp.task('default', gulp.series(clean, styles, watch));