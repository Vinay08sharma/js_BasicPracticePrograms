const str = 'madam';
const isPalindrome = (str) => {
    return str.split('').reverse().join('');
}

if(isPalindrome(str) === str) {
    console.log(`palidnrome string`)
} else {
    console.log( `Not a palidnrome string`)
}