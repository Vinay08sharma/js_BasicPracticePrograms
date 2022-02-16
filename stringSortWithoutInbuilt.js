function sortArray(strr) {
    let str = strr.split("");

    let temp = "";
    for(let i = 0; i< str.length; i++) {
        for(let j = i + 1; j< str.length; j++) {
            if(str[i] > str[j]){
              temp = str[i];
              str[i] = str[j];
              str[j] = temp;
            }
        }
    }
    return(str.join(''));
}

const result = sortArray('badc');
console.log(result);