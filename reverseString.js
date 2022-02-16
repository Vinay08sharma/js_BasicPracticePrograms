const str = 'vinay';

const reverseString = (string1) => {
    return string1.split('').reverse().join('');
}

console.log(`Reverse of String ${str} is ${reverseString(str)}`)