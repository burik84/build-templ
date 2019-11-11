# Webpack 4
 Информация по использованию webpack в проектах

## Использование
Копируем, сохраняем в проект файл `webpack.config.js`

## Установка
* создаем файл в папке проекта `npm init`
* устанавливаем webpack локально `npm install -save-dev webpack webpack-cli`

### Использование плагина browser-sync
* `npm install -save-dev browser-sync-webpack-plugin`
* `npm install -save-dev webpack-dev-server`

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
