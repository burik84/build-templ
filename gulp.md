# GULP
 Информация по использованию gulpfile.js в проектах

 ## Использование
 Копируем, сохраняем в проект файл gulpfile.js.
 В файле gulpfile.js необходимо проверять путь до файлов проекта, при необходимости откорректировать.
 Смотрим необходимые сборки под задачи в проекте и корректируем при необходимости.
 Далее устанавливаем в проект необходимые плагины используя <br>
 npm install --save-dev gulp (см. в файле gulpfile.js) и другие устанавливаются как devDependencies
 + gulp-sass
 + gulp-plumber
 + gulp-autoprefixer
 + del
 + browser-sync
 + gulp-clean-css
 + webpack-stream

 С помощью npm install устанавливаем в dependencies
 + browserlist
 + jquery
 + bootstrap

 и не забыть указать в файле package.json
 ```
 "browserslist": [
   "> 1%",
   "last 2 versions",
   "IE 10"
 ]
 ```

 Запускаем для проверки работы сборщика командой gulp.
