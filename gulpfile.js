'use strict';

/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
var paths = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/webfonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/style/app.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/webfonts/**/*.*',
        service: 'src/service/**/*.*',
        info: 'src/info/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'srs/webfonts/**/*.*'
    },
    clean: 'dist',
    baseDir: 'dist'
};


const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const webserver = require('browser-sync').create();

// удаление папки сборки
function clean() {
    return del(paths.clean);
}

function html() {
    return gulp.src(paths.src.html)
        .pipe(plumber()) // отслеживание ошибок
        .pipe(gulp.dest(paths.build.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({
            stream: true
        })); // перезагрузка сервера
}

function styles() {
    return gulp.src(paths.src.style) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer({ // добавим префиксы
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.build.css)) // выгружаем в build
        .pipe(webserver.reload({
            stream: true
        })); // перезагрузим сервер
}

function script() {
    return gulp.src(paths.src.js, {
            sourcemaps: true
        })
        .pipe(plumber())
        .pipe(gulp.dest(paths.build.js)); // выкладывание готовых файлов

}

// Инкрементальная сборка - пересборка если изменился файлы
function watch() {
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.css, styles);
    gulp.watch(paths.watch.js, script);
}
exports.clean = clean;
exports.styles = styles;
exports.html = html;
exports.watch = watch;
exports.script = script;

// Создание сервера
gulp.task('server', function() {
    webserver.init({
        server: paths.build.html
    });
    webserver.watch(paths.baseDir).on('change', browserSync.reload);
});

// сборка
gulp.task('build',
    gulp.series(clean,
        gulp.parallel(
            html,
            styles,
            script
        )
    )
);

// Сборка заданий в одно общее -задача по умолчанию
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));