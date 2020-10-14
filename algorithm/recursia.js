function coundown(i) {
    console.log(i);
    if (i<=0) {
        return
    }else{
        coundown(i-1)
    }
}

// coundown(4);

function greet(name) {
    console.log('hello, '+ name+ ' !');
    greet2(name);
    console.log('getting ready to say bye...');
    bye();
}

function greet2(name) {
    console.log('How are you, '+name+' ?');
};
function bye() {
    console.log('Ok, bye');
}

// greet('Peter');

function fact(x) {
    if (x==1) {
        return 1
    }else{
        return x*fact(x-1);
    }
}
// console.log(fact(5));

// Найти сумму чисел в массиве
function sum(arr) {
    let result=0
    for(let i=0;i<arr.length;i++){
        result+=arr[i]
    }
    return result;
}

function sumRecursia(arr) {
    if(arr.length==0) return 0;
    let result=arr[0]+sumRecursia(arr.slice(1));
    return result
}
// console.log(sum([2,4,6]), sumRecursia([2,4,6]));

function max(arr) {
    let bigger=arr[0];
    for(let i=1;i<arr.length;i++){
        if (arr[i]>bigger) {
            bigger=arr[i];
        }
    }
    return bigger;
}
function maxRecursia(arr) {
    if (arr.length==2) {
        return arr[0]>arr[1]?arr[0]:arr[1]
    }
    let subMax=maxRecursia(arr.slice(1));
    return arr[0]>subMax?arr[0]:subMax;
}

// console.log(max([8,2,4,6,1,10,5,4]));
// console.log(maxRecursia([8,2,4,6,1,10,5,4]));

function quickSort(arr) {
    if (arr.length<2) {
        return arr;
    }else{
        let pivot=arr[0];
        let less=[];
        let greater=[];
        for(i=1;i<arr.length;i++){
            if (arr[i]<pivot) {
                less.push(arr[i])
            }else{
                greater.push(arr[i])
            }
        }
        let result=[...quickSort(less), pivot, ...quickSort(greater)]
        return result;
    }
}

console.log(quickSort([10,5,2,3]));
console.log(quickSort([1,14,4,7,10,5,2,3]));