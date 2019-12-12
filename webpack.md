# Webpack 4
 Общая информация по webpack. Как с ним работать, настраивать и чтоб он помогал!!!

## Установка
* создаем файл в папке проекта `npm init`
* устанавливаем webpack локально `npm install -save-dev webpack webpack-cli`

### Арихтектура
* src
  - img
  - js
  - сss
  - index.html
* dist [development] для разработки npm run dev
* build [production] для публикации npm run build
### Дополнительные плагины
* `npm install --save-dev css-loader style-loader`
* `npm install --save jquery` jQuery если необходимо
* `npm install --save-dev webpack-dev-server`
* `npm install --save-dev pug pug-loader`
* `npm install -D babel-loader @babel/core @babel/preset-env`

### Настройка режима работы webpack
Файл package.json
```
"scripts": {
  /* Добавить режимы работы - dev для разработки, build в режиме производства*/
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "watch": "webpack --mode development --watch",
    "start": "webpack-dev-server --mode development --entry ./src/js/name.js --output-filename ./dist/name.js --open"
},
```
* npm run dev произойдет сборка проекта
* npm run build также произойдет сборка проекта, но уже итоговая
* npm run watch запускается режим автоматического просмотра изменений файлов проекта с автоматическим допостроением измененных файлов
* npm run start запустится локальный сервер

### Файл настроек webpack.config.js

`entry: [],` указываем, какой js файл будем собирать

`output: {filename: './js/bundle.js'},` указываем путь в папке dist, куда будем помещаться собранный файл

`devtool: "source-map",` параметр позволяет создавать карты исходников для js и css файлов.

`module: {rules: [{ },]},` правило для обработки конкретных файлов (js, css и т.д.)

## Обработка css файлов
Необходимые модули node-sass, sass-loader, css-loader и mini-css-extract-plugin
```
module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    }, ],
},
```
## Обработка js файлов
```
module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: '[@babel/preset-env]'
            }
        }
    }, ],
}
```

### Помощь.

Использовал следующие ресурсы:
* [Простой статический сайт на Webpack 4](https://habr.com/ru/post/350886/)
* [Webpack 4: практические рекомендации по настройке](https://tproger.ru/translations/configure-webpack4/)
* [Лучший способ подключения и обработки шрифтов.](https://tocode.ru/curses/nastroika-webpack4/podkluchenie-shriftov)
* [Обработка файлов, настройка webpack-merge и copy-webpack-plugin](https://tocode.ru/curses/nastroika-webpack4/obrabotka-failov-nastroika-merge)
* [Использование webpack для верстки. Подключение Pug](https://tocode.ru/curses/nastroika-webpack4/webpack-dlya-verstki-pug)
* [Webpack Template on GitHub](https://github.com/vedees/webpack-template-pug)
* [Настройка препроцессора SASS, подключение postcss плагинов](https://tocode.ru/curses/nastroika-webpack4/preprocessor-sass-postcss)
