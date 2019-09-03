#Все мое про PUG
PUG - шаблонизатор HTML. [ссылка](https://pugjs.org/api/reference.html)

Туториал по HTML препроцессору [Pug](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228)

## Использование
Устанавливаем `npm install pug` и `npm install pug-cli -g`. Далее можно проверить работу, запускаем `pug --help` и должно быть все отлично.

Для запуска используем
* `pug -w name.pug` ! для минификации html файла
* `pug -w -P name.pug` ! для отладки html файла (без минификации)

###Начало
```
doctype html
html(lang="ru-RU")
    head
    body
```
Идентификаторы и классы `#container.col` получаем `id=container  class=col`

Ссылки `link(href="main.css" rel="stylesheet")`

вставляем файлы `extends layout/name` и далее испольуем `block content`

Переменные
```
-var pageTitle='123'

head
  title= pageTitle
```
