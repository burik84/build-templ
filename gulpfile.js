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

// для выбора режимов
// режим отладки development
// let isDev = true;
// режим production
let isDev = false;
let isProd = !isDev;

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const rigger = require('gulp-rigger');
const gulpif = require('gulp-if');
const tildeImporter = require('node-sass-tilde-importer');

sass.compiler = require('node-sass');


// удаление папки сборки
function clean() {
    return del(paths.clean);
}

function html() {
    return gulp.src(paths.src.html)
        .pipe(plumber()) // отслеживание ошибок
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulpif(isProd, htmlmin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest(paths.build.html)) // выкладывание готовых файлов
        .pipe(browserSync.stream()); // перезагрузка сервера
}

// Если у нас на входе несколько файлов scss, то plumber и concat я не использую.
function styles() {
    return gulp.src(paths.src.style) // получим main.scss
        // .pipe(plumber())
        .pipe(sass({
            importer: tildeImporter
        }).on('error', sass.logError)) // scss -> css + импорт из nodemodules c использованием ~
        // .pipe(concat('all.css'))
        .pipe(autoprefixer({ // добавим префиксы
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpif(isProd, cleanCSS({
            level: 1
        })))
        .pipe(gulp.dest(paths.build.css)) // выгружаем в build
        .pipe(browserSync.stream()); // перезагрузим сервер
}

function script() {
    return gulp.src(paths.src.js, {
            sourcemaps: true
        })
        .pipe(plumber())
        .pipe(gulp.dest(paths.build.js)) // выкладывание готовых файлов
        .pipe(browserSync.stream()); // перезагрузим сервер
}

// Инкрементальная сборка - пересборка если изменился файлы
function watch() {
    browserSync.init({
        server: paths.baseDir
    });
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.css, styles);
    gulp.watch(paths.watch.js, script);
}
exports.clean = clean;
exports.styles = styles;
exports.html = html;
exports.watch = watch;
exports.script = script;

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
gulp.task('default', gulp.series('build', watch));