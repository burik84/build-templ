// Якоря

let str='Я вас любил: любовь еще, быть может,\nВ душе моей угасла не совсем;\nНо пусть она вас больше не тревожит;\nЯ не хочу печалить вас ничем. Я ва любил безмолвно, безнадежно,\nТо робостью, то ревностью томим;\nЯ вас любил так искренно, так нежно,\nКак дай вам Бог любимой быть другим.'

// console.log(str);
let regexp=/[^\s]+/g; //поиск, исключая все пробельные символы
regexp=/^[^\s]+/g; //Поиск с начала текста
regexp=/[^\s]+$/g;//Поиск с конца текста
regexp=/^[^\s]+/gm; //Поиск с начала каждой строки
regexp=/[^\s]+$/gm;//Поиск с конца каждой строки

str='Hello, I am JavaScript programmer... Yes, am...';
regexp=/am/g;
regexp=/\sam\s/g;
regexp=/\bam\b/g;
regexp=/\Bam\B/g;

let result=str.match(regexp);
// console.log(result);

const password=document.getElementById('password')
password.addEventListener('input',(e)=>{
    let text=e.target.value;
    let reg=/.{8,16}/;
    reg=/^.{8,16}$/;

    let result=reg.test(text);
    console.log(result);
    if (result) {
        e.target.classList.remove('form-input_invalid');
        e.target.classList.add('form-input_valid')
    }else{
        e.target.classList.add('form-input_invalid');
        e.target.classList.remove('form-input_valid')
    }
})
