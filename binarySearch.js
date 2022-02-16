// Binary Search algo, requires arrays to be in the sorted
// Starts by getting the lower and upper value & than get the middle value & check if its the required value
//  

var binary = (value, arr) => {
    let lower = 0;
    let upper = arr.length - 1;

    while(lower <= upper) {
        console.log('TRYINGGGGGG>>>>>')
        let middle = lower + Math.floor((upper - lower) / 2); 
        if(arr[middle] === value){
            return middle;
        }
        if(value < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }
    }

        return -1;
    }

    const val = [1,3,2,5,4,6,7,9,8];

    console.log(binary(2, val.sort()));
