/**
 * @param {number} rowIndex
 * @return {number[]}
 */

function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n  * factorial(n - 1);
}

var getRow = function(rowIndex) {
    const arr = [];
    for(let k = 0; k <= rowIndex ; k++){
        let value =Math.round(factorial(rowIndex) / (factorial(k) * factorial((rowIndex) - k)))
        arr.push(value)
    }
    return arr
};

console.log(getRow(1))


