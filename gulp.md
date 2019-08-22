# GULP
 Информация по использованию gulpfile.js в проектах

## Использование
Копируем, сохраняем в проект файл gulpfile.js.
В файле gulpfile.js необходимо проверять путь до файлов проекта, при необходимости откорректировать.
Смотрим необходимые сборки под задачи в проекте и корректируем при необходимости.
Далее устанавливаем в проект необходимые плагины

### Плагины
npm install --save-dev gulp (см. в файле gulpfile.js) и другие устанавливаются как devDependencies
 + gulp-sass
 + gulp-plumber
 + gulp-autoprefixer
 + del
 + browser-sync
 + gulp-clean-css
 + gulp-htmlmin
 + gulp-rigger
 + gulp-if
 + node-sass-tilde-importer
 + webpack-stream

С помощью npm install устанавливаем в dependencies

 + browserlist
 + jquery
 + bootstrap
 + normalize.css

и не забыть указать в файле package.json
 ```
 "browserslist": [
   "> 1%",
   "last 2 versions",
   "IE 10"
 ]
 ```

### Режимы
Использую два режима: разработки - `development` и производства - `production`
В режиме `development` происходит выполнение сборок для html, css, js и копирование файлов
```
let isDev = true;
```
В режиме `production` происходит выполнение сборок для html, css, js с сжатием кода, копирование прочих файлов и всё это готово к публикации.
```
let isDev = false;
```
Запускаем для проверки работы сборщика gulp и название команды.

[Назад](README.md)
