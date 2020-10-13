# Регулярные выражения в JS

[playlist](https://www.youtube.com/playlist?list=PLY4rE9dstrJybXiawtabniwVxQSCAb3PL)

## Cоздание регулярных выражений

С помощью конструктора сonst newRegexp=new RegExp(1,2)
1 - шаблон
2 - флаги

С помощью // const newRegexp=/шаблон/флаги;

Для экранирование специальных символов использовать \ перед символом
new RegExp('\\n',2)

## Методы
.match(regex) - метод STRING для поиска совпадений

## Правила

\ экранирование перед символами (.,/|...)
. любой символ
\d любой цифровой символ [0-9]
\D любой НЕ цифровой символ - буквы и символы
\s пробельный символ - пробел, табуляция, перенос строки
\S НЕпробельный символ
\w символьный класс - цифры и буквы лат.
\W НЕсимвольный класс - знаки, пробелы, спец.символы и т.д.

### наборы

[фис] любой символ из данного набора
[^фя] исключающий набор
[a-z] диапазон внутри набора