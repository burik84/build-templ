// const regexp=new RegExp('шаблон', 'флаги')

// const newRegexp=/шаблон/флаги;

let str='hello _ my world,about filter regex 54 greet. What\'s your name? How old are you 34?';

// const regexp=/world/;
// const regexp=/\d\d\s/;
// const regexp=/\d\d\S/;
// const regexp=/\D\D/;
// const regexp=/\s\w\w\s/
// const regexp=/\w\w\w\w/
// const regexp=/\w/
// const regexp=/\W/

str='Это Юра и Ира сказали Ура'
let regexp=/[ЮИ]ра/;
regexp=/[^ЮИ]ра/;

str='йцукенгшщзхъфывапролджэячсмитьбюё'
regexp=/[в-ж]/;
regexp=/[^й-ц]/;
regexp=/[^а-вг-е]/;
regexp=/[^а-я]/;

const result=str.match(regexp);
console.log(result);
console.log(
    'а'.charCodeAt(),
    'я'.charCodeAt(),
    'ё'.charCodeAt(),
);