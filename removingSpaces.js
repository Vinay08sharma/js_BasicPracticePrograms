// There is a sentence with many spaces (don’t know the count) between the words 
// I/P Example: My    Name     Is        Ram 
// Write a method to change it to only one space between the words them 
// O/P: My name is Ram 


let str = 'My    Name     Is        Ram';

let result = str.replace(/ +/g, ' ');

console.log(`After removing space : ${result.trim()}`);