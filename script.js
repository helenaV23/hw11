// Написать функцию, которая принимает как аргумент(параметр) 
// два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся функцией.
// Пример:
// if(summA < summB) => return b

let first = [1,2,3, 'hello',4,5];

let second = [1,2,3, true, 4, undefined, 6];

function compare(a, b) {
    let totalA = getSum(a);
    let totalB = getSum(b);

    return totalA > totalB ? a : b; 
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}

let greraterAr = compare(first, second);
console.log(greraterAr);
