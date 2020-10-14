// findSmall - функция для поиска наименьшего элемента массива
// selectionSort - функция сортировки выбора

function findSmall(arr) {
    let smallest=arr[0];
    let smallestIndex=0;
    for(let i=1;i<arr.length;i++){
        if (arr[i]<smallest) {
            smallest=arr[i];
            smallestIndex=i;
        }
    }
    // console.log(arr, smallestIndex);
    return smallestIndex;
}

function selectionSort(arr) {
    let newArr=[];
    let arr2=[...arr]
    for (let i = 0; i < arr.length; i++) {
        let smallest=findSmall(arr2);
        newArr.push(...arr2.splice(smallest,1))
        // console.log(smallest, newArr, arr);
    }
    return newArr;
}
console.log(selectionSort([5,3,6,2,10]));