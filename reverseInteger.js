const num = 1234;

const reverseInteger = (value) => {
    const num1 = num.toString();
    return num1.split('').reverse().join('');
}

const res = reverseInteger(num) * 1;
console.log(res);
// console.log(typeof(res));
