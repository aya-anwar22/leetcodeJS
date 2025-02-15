/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const arr = []
    let str =  digits.join("") ;
    // console.log(str);
    let numbers = BigInt(str) +1n;
    // console.log(numbers);
    numbers = String(numbers);
    // console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        arr.push(Number(numbers[i]));
    }
    return arr;
  
    
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
