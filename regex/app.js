// Опережающие и ретроспективные проверки, а также альтернации

let str='abcdef';
let regexp=/b|d/g;

str='Завтра в 09:15. Обед в 15:45. Ужин в 19:20';
regexp=/(?:[01]\d|2[0-3]):[0-5]\d/g;

str='Ваш заказ 87, с вас 475 рублей. Вот ваша сдача 25 рублей.';
regexp=/\d+\b(?=\sрублей)/g;
regexp=/\d+\b(?!\sрублей)/g;
regexp=/(?<=заказ\s)\b\d+/g;
regexp=/(?<!заказ\s)\b\d+/g;

str=`
    a B
    aa aB Ba BB
    1aa a1a aa1
    1aB a1B aB1
    1BB B1B BB1
`;
regexp=/[a-zA-Z\d]/g;
regexp=/(?=[a-z])[a-zA-Z\d]/g;
regexp=/(?=[A-Z]*?[a-z])(?=[a-z]*?[A-Z])[a-zA-Z\d]{2}/g;
regexp=/(?=[A-Z\d]*?[a-z])(?=[a-z\d]*?[A-Z])(?=[a-zA-Z]*\d)[a-zA-Z\d]{3}/g;

const result=str.match(regexp);
// console.log(result);

const password=document.getElementById('password');

password.addEventListener('input',(e)=>{
    let text=e.target.value;
    let reg=/.{8,16}/;
    reg=/^.{8,16}$/;
    reg=/^(?=[A-Z\d]*?[a-z])(?=[a-z\d]*?[A-Z])(?=[a-zA-Z]*\d)[a-zA-Z\d]{8,16}$/;
    reg=/^(?=\S*?[a-z])(?=\S*?[A-Z])(?=\S*?\d)\S{8,16}$/;
    reg=/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{8,16}$/;
    reg=/^(?=.*?\p{Ll})(?=.*?\p{Lu})(?=.*?\d).{8,16}$/u;

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