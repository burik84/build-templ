# Описание к файлу.
Кому интересно - на основе **курса** [Mastering Markdown](https://masteringmarkdown.com/) для [портфолио][1]

## О плагине
Для ``Atom`` установил плагин ``markdown-writer``, советую.

### Краткое описание
Небольшой *шаблончик* по `markdown`. <br>
Так как в последнее время периодически стал использовать, то решил закрепить материал и сохранить к [себе][1] .<br>
И в сети есть **очень** хорошие источники, например [markdown-it](https://markdown-it.github.io/)

---
### Ссылки
<https://burik84.github.io/my-portfolio/>

[Github][1] [Github](https://burik84.github.io/my-portfolio/ "Мой портфолио")

[1]:https://burik84.github.io/my-portfolio/

---
### Картинки
Основной синтаксис `![]()`.

![Картинка 1](https://picsum.photos/200?random=1 "Всплывающая подсказка") ![Картинка 2][pup]

[Ссылка](https://picsum.photos/500/500?random=3)
[<img src="https://picsum.photos/id/234/50/50">](https://picsum.photos/id/234/500/500)

[pup]:https://picsum.photos/200?random=2

---
## Списки
### Не нумерованнай
+ первый
+ второй
+ третий
+ последний

### Нумерованный
1. первый пункт
    - вложенный список
        - вложенный список
    - вложенный список
1. второй пункт
    1. список дополнительный
    1. список дополнительный
    1. список дополнительный
1. третий пункт

---
### Цитаты
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore <br> -
> **Lorem Ipsum**

---
### Вставка кода:
    const a=10;
    const name='snickers';

```html
<div class="container">
    <h1>Заголовок</h1>
</div>
```

```
console.log("text lorem")
```

```diff
var a=100;
    - var b=200;
    + var b=400;
```
---
### Таблицы
|Кличка собаки| возраст собаки|
|:-----------:|:--------------|
|Мишель| 3,5 года|
|Мигель| 2,5 года|

---
### Бонусы

* [ ] молоко
* [x] бекон
* [ ] масло
