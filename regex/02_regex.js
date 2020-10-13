let str="Сегодня 14.10.2020";

let regexp=/\d\d\.\d\d\.\d\d\d\d/;
regexp=/\d{2}\.\d{2}\.\d{4}/;

str='У меня только 50, не хватает еще 1000';
regexp=/\d{3,4}/;
regexp=/\d{3,4}?/;
regexp=/\d{3,}/;
regexp=/\d{3,}?/;

str='What colour is the cat?';
regexp=/colou?r/;

str='0123456789';
regexp=/\d*/
regexp=/\d*?/
regexp=/\d+/
regexp=/\d+?/

let result=str.match(regexp);

str='1,2, 3, 4, 5,6, 7 ,8';
regexp=/\s*,\s*/;
result=str.split(regexp);

str='... телефон 123456. Его почта';
regexp=/\d{6}/;
regexp=/\d{7}/;
result=str.search(regexp);


console.log(result);
