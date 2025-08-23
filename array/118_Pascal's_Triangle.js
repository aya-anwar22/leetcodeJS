/**
 * @param {number} numRows
 * @return {number[][]}
 */


function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n  * factorial(n - 1);
}

var generate = function(numRows) {
    const arr = [];
    for(let n = 0; n < numRows; n++){
        let innerArr = []
        for(let k = 0; k <=n  ; k++){
            let value =Math.round(factorial(n) / (factorial(k) * factorial(n - k)))

            innerArr.push(value)
           
        }
         arr.push(innerArr)
        
    }
    return(arr)
};

console.log(generate(24))


