// Write a program to find the missing number from an array

let a = [1,2,3,4,5,6,8];

function findMissingNumber(arr) {
    let c = 0;
    arr.forEach(element => {
        c+= element
    });

    let totalValue = 0;
    for(let j = 1; j <= a.length+1; j++){
        totalValue+= j;
        }
        return totalValue - c;
}

const result = findMissingNumber(a);
console.log(`The missing number is = ${result}`);