let str=`
    ARP-таблица:
    Физичесий адрес     IP-адрес
    03-60-8C-01-02-03   197.17.13.3
    00:01:A2:05:09:89   197.17.13.44
    AA-00-22-6A:92-89   197.17.13.123
    08-AE-02-90-90-90   197.17.13.4
    08:BC:AC:90:90:90   197.17.13.67
    `
let regexp=/[a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}/gi;
regexp=/([a-f\d]{2}[-:]){5}[a-f\d]{2}/gi;
regexp=/(?:[a-f\d]{2}[-:]){5}[a-f\d]{2}/gi;
regexp=/[a-f\d]{2}([-:])(?:[a-f\d]{2}[-:]){4}[a-f\d]{2}/gi;
regexp=/[a-f\d]{2}([-:])(?:[a-f\d]{2}\1){4}[a-f\d]{2}/gi;
regexp=/[a-f\d]{2}(?<separator>[-:])(?:[a-f\d]{2}\k<separator>){4}[a-f\d]{2}/gi;

str='Меня зовут Igor Sodir. А тебя?';
regexp=/(\w+)\s(\w+)/;
regexp=/(?<first_name>\w+)\s(?<last_name>\w+)/;

let result=Array.from(str.matchAll(regexp));
result=str.match(regexp);
result=str.replace(regexp, '$&');
result=str.replace(regexp, '$`');
result=str.replace(regexp, '$\'');
result=str.replace(regexp, '$1 $2');
result=str.replace(regexp, '$2 $1');
result=str.replace(regexp, '$2 $1');
result=str.replace(regexp, '$<last_name> $<first_name>');
result=str.replace(regexp, '\$');
result=str.replace(regexp, 'Игорь Сидоров');
result=str.replace(regexp, (match, p1,p2,offset,input,group)=>{
    console.log(match);
    console.log(p1);
    console.log(p2);
    console.log(offset);
    console.log(input);
    console.log(group);
    return `${p2} ${p1}`
});

console.log(result);