# FLEXBOX

По курсу [What The FLEXBOX](https://flexbox.io/)

## Описание видео курса
The first 13 videos are aimed at understanding the fundamentals of Flexbox - we will take a deep dive into understanding rows, columns, axes, wrapping, alignment, centering and layout. The last 7 are code alongs where we will build everything from a navigation to a mobile app layout entirely with Flexbox!

В сети есть вот такая клевая [шпаргалка](https://tpverstak.ru/flex-cheatsheet/)

### Описание
Итак есть контейнер (флекс-контейнер) и есть наши блоки  (флекс-элементы) которые мы хотим выравнивать по нашим пожеланиям в этом контейнере.
Для флексов не так и много основных свойств, которые применяются.

для **флекс-контейнера**, в котором располагаются наши флекс-элементы (карточки, значки, блоки и т.д.):

|Свойства           |Значения|
|:-----------------:|:--------------|
|display|flex, inline-flex|
|flex-direction |row, column   |
|flex-wrap  |wrap, nowrap   |
|justify-content   | flex-start, flex-end, center, space-between, space-around  |
|align-items   | flex-start, flex-end, center, baseline, stretch  |
| align-content  | flex-start, flex-end, center, space-between, space-around, stretch   |

для **флекс-элементов** используем следующие свойства:

|Свойства|Значения|
|:-----------:|:--------------|
|flex-grow   | 0, 1  |
|flex-shrink   |0, 1|
|flex-basis   | 30px, 50px, content |
|align-self   |flex-start, flex-end, center, baseline, stretch  |
| order  |  -1, 0 ,1  |

Краткая запись вместо grow, shrink и basis `flex: 1 1 50px;`


[Назад](../README.md)
