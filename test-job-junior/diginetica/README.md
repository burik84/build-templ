# Тестовое задание: Junior frontend-инженер

Доброе пожаловать в тестовое задание на вакансию junior frontend-инженера в команду интеграции новых клиентов компании Diginetica (продукт AnyQuery).

Для успешного прохождения тестового задания необходимо ответить на все вопросы тестового задания.

[task](https://docs.google.com/forms/d/e/1FAIpQLSfZ48beuagApNDxk2NegWI__74qGf6EVXEOU_HT2AFupdrZBw/viewform)

- [ ] Каким будет результат такого сравнения на языке JavaScript 1 === '1'. Почему был получен такой результат? false => стогое сравнение (===) number и string
- [ ] Каким будет результат следующей операции на языке JavaScript: [1, 2, 3] + [4, 5, 6]. Почему был получен такой результат? "1,2,34,5,6" => в нашем случае каждый массив приводится к типу string('1,2,3' и '4,5,6') и далее конкатенция строк
- [ ] Дано выражение: var a = {b: 1};var b = a;b.b = 2;console.log(a); Что будет выведено в консоли? Почему был получен такой результат? {b:2} => есть объект b:1. Объявлена переменная а, которая ссылается на объект. И объявлена переменная b, которая создана от переменной а, ссылка которая указывает на объект. Объект хранится один и по ссылкам происходит вызов для переменных. Затем b.b - по ссылке в объект изменяем значение и текущий объект уже {b:2}. Объект один и тот же для обеих переменных, следовательно при вызове а происходит переход по ссылке к объекту.
- [ ] Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой

  ```
  /^\d{1,}\.{0,1}\d{0,3}$/
  ^ - начало строки
  \d{1,} - цифровые символы [0-9], которые повторяются от 1 и более раз
  \. символ точка, повторяется 1 раз в числе или отсутствует
  \d{0,3} - цифровые символы [0-9] и повторения  до 3 раз
  $ - окончание строки
  ```

- [ ] Написать регулярное выражение, по которому мэтчится url введенный в строке браузера. Объяснить, как оно работает.

  ```
    /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\w\/.-]*)\/?$/
    ^ - начало строки
    проверка протокол http|https и ://
    проверк домена > 1 уровня - цифры, буквы латинские, знак . и слеш
    знак точка - разделитель между доменом 1 и 0 уровня
    проверка доменов 0 уровня - буквы латинские и кириллица, которые повторяются от 2 до 6 раз
    любые алфавитные символы, включая знаки могут быть неограниченное количество раз или отсутствовать
    знак слеш по окончанию может присутствовать или отсутствовать
    $ - конец строки
  ```

- [ ] Каким будет значение переменной text после выполнения данного JavaScript кода? function setText(message) { text = message; } var text = 'Текст'; setText('Сообщение'); Опишите, почему получился такой результат.

  ```
    ответ 'Сообщение' - вызов функции с аргументом происходит после присваивание переменной text и следовательно значение переменной равно аргументу функции
  ```

- [ ] На сайте есть ссылка, ведущая на промо страницу: <a href="http://example.com/">promo</a>. Нужно доработать html-код ссылки так, чтобы при клике на ссылку отправлялся запрос для трекинга клика <https://httpbin.org/status/200> и происходил переход на промо страницу в новом окне.
```
<a href="http://example.com/?utm_source=https://httpbin.org/status/200" target='_blank'>promo</a>
```
- [ ] Написать функцию для получения список всех артикулов товаров в консоли браузера на странице <https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog>. *
Выполненное задние принимается через публикацию кода на codepen.io.
- [ ] Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице <https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/> *
Выполненное задние принимается через публикацию кода на codepen.io.

## Верстка

Необходимо сверстать шаблон макета Figma *
Необходимо сверстать макет фигма по ссылке: <https://www.figma.com/file/OlFzLxCyCFXJiPWNKBIk4g/>. Оцениваться будет соответствие макету и модульность. Мобильная версия на ваше усмотрение. Плюсом будет интерактивность (перемещение слайдера цены, стили элементов при наведении)