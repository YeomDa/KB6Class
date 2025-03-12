const add = (a, b) => {
    return a + b;
};

const toUpperCase = (str) => {
    return str.toUpperCase();
};

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        //console.log(sum);
    }
    return sum;
};
console.log(add(1, 2));
console.log(toUpperCase('hello'));
console.log(sumArray([1, 2, 3, 4, 5]));
