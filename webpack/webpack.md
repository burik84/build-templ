# Webpack 4
 Общая информация по webpack. Как с ним работать, настраивать и чтоб он помогал!!!

## Арихтектура

* src
  - img - исходные картинки + favicons + icons
  - js
  - config
    - postcss.config.js
    - webpack.prod.js - файл настроек для публикации (минификация)
    - webpack.dev.js - файл настроек для тестирование
    - webpack.common.js - общий файл для вебпак
  - sсss файлы стилей
  - fonts подключение шрифтов
  - static файлы для переноса в корень dist для публикации на домене
  - index.html
  - .babelrc
* dist - для тестировании и публикации файлов


## Файл настроек webpack

`entry: [],` указываем, какой js файл будем собирать

`output: {filename: './js/bundle.js'},` указываем путь в папке dist, куда будем помещаться собранный файл

`devtool: "source-map",` параметр позволяет создавать карты исходников для js и css файлов.

`module: {rules: [{ },{}]},` правило для обработки конкретных файлов (js, css и т.д.)
### Установка и первая настройка

* Создаем новый проект `npm init`
* устанавливаем webpack локально `npm install -save-dev webpack webpack-cli webpack-dev-server`
* в папке src создаем файл index.js
* в файле package.json вставляем и добавляем режимы development `-d` или production `-p`
```
"scripts": {
  "dev":"webpack -d",
  "prod":"webpack -p",
},
```
* проверяем работу `npm run webpack`

### Продолжаем настройку
* создаем файл конфигурации webpack.dev.js в новой папке config
* прописываем в файле
```
const path=require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    }
}
```
### Работа с html файлами
* устанавливаем `npm install  --save-dev  html-webpack-plugin`
* в файле конфигурации добавляем
```
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    ...,
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}
```

### Работа с scss файлами
* устанавливаем `npm install --save-dev css-loader style-loader node-sass mini-css-extract-plugin sass-loader`
* в файл конфигурации добавляем
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
...
module: {
    rules: [{
        test: /\.scss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ],
    }],
    ...
    plugins: [
        ...
        new MiniCssExtractPlugin(),
    ]
},
```

### Чистка файлов в папке dist
* устанавливаем `npm install  --save-dev clean-webpack-plugin`
* добавляем в конфигурации
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins: [
        new CleanWebpackPlugin(),
        ...
    ],

```
### Дополнительные плагины для настройки

* `npm install --save-dev pug pug-loader`
* `npm install--save-dev babel-loader @babel/core @babel/preset-env`
* `npm install  --save-dev file-loader copy-webpack-plugin html-webpack-plugin` для копирование файлов из папки src в dist
* `npm install  --save-dev postcss-loader autoprefixer cssnano css-mqpacker`
* `npm install  --save-dev webpack-merge` для разделение режимов работы тестирование dev и публикации build
* `npm install  --save-dev vue-loader vue-style-loader vue-template-compiler` для работы с vue

### Инструменты для подключения к проекту

* `npm install --save jquery`
* `npm install --save popper.js`
* `npm install --save normalize.css`
* `npm install --save bootstrap`
* `npm install --save vue vuex` установка vue

### Настройка режима работы webpack
Файл `package.json`

Режимы разработки - dev для разработки, build в режиме производства
```
"scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production",
    "server": "webpack-dev-server --mode development --entry ./src/js/name.js --output-filename ./dist/name.js --open"
},
```
* npm run dev произойдет сборка проекта
* npm run prod также произойдет сборка проекта, но уже для публикации
* npm run server запустится локальный сервер

Не забыть указать `browserslist` для автопрефиксов
```
"browserslist": [
  "last 1 version",
  "> 1%",
  "IE 10"
],
```
### Дополнительные файлы конфигураций
В файле .babelrc указываем
```
{
"presets":[
    "@babel/preset-env"
    ]
}
```
В файле postcss.config.js для конфигурации postcss указываем
```
module.exports = {
    plugins: [
        require('autoprefixer'), ,
        require('css-mqpacker'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }),
    ],
};
```
### Обработка картинок
* устанавливаем `npm install  --save-dev file-loader image-webpack-loader copy-webpack-plugin`
* в файле конфигурации прописываем
```
const CopyWebpackPlugin = require('copy-webpack-plugin');
...
module: {
    rules: [
    ...,
    {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                esModule: false
            }
        },
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 80
                },
            }
        },
    ]
},

plugins: [
    ...,
    new CopyWebpackPlugin([{
        from: './src/img',
        to: './img'
    }]),
]
```

### Минификация css файлов
```
module: {
    rules: [{
        test: /\.scss$/,
        use: [
            ...,
             {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    config: {
                        path: 'src/js/config/postcss.config.js'
                    }
                }
            },
            ...,
        ],
    }, {
        test: /\.css$/,
        use: [
            ...,
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    config: {
                        path: 'src/js/config/postcss.config.js'
                    }
                }
            }
        ],
    }, ],
},
```
### Обработка js файлов
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
### Подключение jQuery popper.js bootstrap
* устанавливаем `npm install --save jquery popper.js`
* В файл конфигурации добавляем
```
const webpack=require('webpack');
...
plugins: [
    ...,
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
]

```
* в файле сборки .js импортировать
`import 'jquery';
import 'popper.js';
import 'bootstrap';`

### Помощь.

Использовал следующие ресурсы:
* [Простой статический сайт на Webpack 4](https://habr.com/ru/post/350886/)
* [Webpack 4: практические рекомендации по настройке](https://tproger.ru/translations/configure-webpack4/)
* [Использование webpack для верстки. Подключение Pug](https://tocode.ru/curses/nastroika-webpack4/webpack-dlya-verstki-pug)
* [Webpack Template on GitHub](https://github.com/vedees/webpack-template-pug)
