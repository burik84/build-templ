let str='a\nb';
let regexp=/./;
regexp=/./g;
regexp=/./gs;

regexp=new RegExp('.','gs');

str='Кот терракотового цвета кушает котлету';
regexp=/кот/g;
regexp=/кот/gi;


let result=str.match(regexp);
result=Array.from(str.matchAll(regexp)) ;
// result=regexp.exec(str);

// console.log(regexp.lastIndex);
// console.log(result,regexp.lastIndex);

// result=regexp.exec(str);
// console.log(result,regexp.lastIndex);

// result=regexp.exec(str);
// console.log(result,regexp.lastIndex);

// result=regexp.exec(str);
// console.log(result,regexp.lastIndex);

let currentResult=null;
while (currentResult=regexp.exec(str)) {
    result=[...result, currentResult]
}

// console.log(result);

// str='';

// for (let i=0;i<10000000;i++){
//     str+=(i===1000||i===2000)?'b':'a'
// }

// regexp=/b/g;
// let t1=performance.now();
// let result1=regexp.exec(str);
// let result2=regexp.exec(str);
// let result3=regexp.exec(str);
// let t2=performance.now();
// console.log(t2-t1, result1, result2, result3);

// regexp=/b/y;
// t1=performance.now();
// result1=regexp.exec(str);
// result2=regexp.exec(str);
// result3=regexp.exec(str);
// t2=performance.now();
// console.log(t2-t1, result1, result2, result3);

// regexp=/b/g;
// t1=performance.now();
// regexp.lastIndex=1000;
// result1=regexp.exec(str);
// regexp.lastIndex=2000;
// result2=regexp.exec(str);
// result3=regexp.exec(str);
// t2=performance.now();
// console.log(t2-t1, result1, result2, result3);

// regexp=/b/y;
// t1=performance.now();
// regexp.lastIndex=1000;
// result1=regexp.exec(str);
// regexp.lastIndex=2000;
// result2=regexp.exec(str);
// result3=regexp.exec(str);
// t2=performance.now();
// console.log(t2-t1, result1, result2, result3);

str='$10 это 650р.';
regexp=/\p{Sc}/g;

regexp=/\p{Sc}/gu;



result=str.match(regexp);
console.log(result);
