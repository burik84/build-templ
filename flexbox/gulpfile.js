const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./'))
}
exports.styles = styles;
exports.watch = () => (
    gulp.watch('css/*.css', styles)
);