# Webpack 4
 Информация по использованию webpack в проектах

## Использование
Копируем, сохраняем в проект файл `webpack.config.js`

## Установка
* создаем файл в папке проекта `npm init`
* устанавливаем webpack локально `npm install -save-dev webpack webpack-cli`

### Использование плагина browser-sync
* `npm install --save-dev browser-sync-webpack-plugin`
* `npm install --save-dev webpack-dev-server`
* `npm install --save-dev pug pug-loader`

### Настройка webpack
Файл package.json

```
"scripts": {
  /* Добавить режимы работы - dev для разработки, build в режиме производства*/
  "dev": "webpack --mode development --watch",
  "build": "webpack --mode production --watch"
},
```

Файл webpack.config.js
```
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
```

### Помощь.

Использовал следующие ресурсы:
* [Webpack 4: практические рекомендации по настройке](https://tproger.ru/translations/configure-webpack4/)
* [Лучший способ подключения и обработки шрифтов.](https://tocode.ru/curses/nastroika-webpack4/podkluchenie-shriftov)
* [Обработка файлов, настройка webpack-merge и copy-webpack-plugin](https://tocode.ru/curses/nastroika-webpack4/obrabotka-failov-nastroika-merge)
* [Использование webpack для верстки. Подключение Pug](https://tocode.ru/curses/nastroika-webpack4/webpack-dlya-verstki-pug)
* [Webpack Template on GitHub](https://github.com/vedees/webpack-template-pug)
* [Настройка препроцессора SASS, подключение postcss плагинов](https://tocode.ru/curses/nastroika-webpack4/preprocessor-sass-postcss)
