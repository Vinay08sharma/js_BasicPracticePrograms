// a={2,3,0,0,5,0,8}
// 1. write a code to put all 0 at the end


let a = [2,3,0,0,5,0,8];

a = a.sort();
a = a.reverse();
a.forEach((b) => console.log(b));

