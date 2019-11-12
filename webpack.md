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
* [Использование webpack для верстки. Подключение Pug](https://tocode.ru/curses/nastroika-webpack4/webpack-dlya-verstki-pug)
* [Webpack Template on GitHub](https://github.com/vedees/webpack-template-pug)
