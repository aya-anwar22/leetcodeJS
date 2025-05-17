/**
 * @param {number} x
 * @return {boolean}
 */
let isPalind = true;
var isPalindrome = function(x) {
    x = String(x);
    //check if number length is even
    if(x.length %2 == 0){
        for(let i = 0; i < (x.length / 2); i++) {
        if(x[i] === x[x.length - i -1]){
            isPalind = true;
        }
        else{
            isPalind = false;
            return isPalind;
        }
    }
        return isPalind;
    } 
    //check if number length is odd
    else if(x.length === 1 ){
        isPalind = true;
        return isPalind;
    } 
    else if (x.length %2 != 0){
        for(let i = 0; i < (x.length - 1) / 2; i++) 
        {
            if(x[i] === x[x.length - i -1])
            {
                isPalind = true;
            }
            else
            {
            isPalind = false;
            return isPalind;
        }    
    }
    return isPalind;

    }
};

