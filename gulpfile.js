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

// Сборка scss
gulp.task('sass', function() {
    return gulp.src('project/scss/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('project/dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// удаление папки сборки
gulp.task('clean', function() {
    return del('project/dist/css/main.css');
});

// общая задача
gulp.task('build', gulp.series('clean', 'sass'));

// Инкрементальная сборка - пересборка если изменился файлы
gulp.task('watch', function() {
    gulp.watch('project/scss/*.scss', gulp.series('sass'));
});

// Создание сервера
gulp.task('server', function() {
    browserSync.init({
        server: 'project/dist'
    });
    browserSync.watch('project/dist/**/*.*').on('change', browserSync.reload);
});

// Сборка заданий в одно общее -задача по умолчанию
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));