//https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = Number(digits.join('')) + 1
    let arr = num.toString().split('').map(Number);
    return (arr)
};
