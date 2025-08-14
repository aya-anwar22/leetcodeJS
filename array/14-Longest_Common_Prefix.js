/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ''
    let str = strs[0]
    for(let i = 0; i< str.length; i++){
        let j = 1;
        while(j < strs.length){
            if(strs[j][i] !== str[i]){   
                return res;
                
            }
            else{
                bool = true
            }
            j++;
        }
        if(bool){
            
            res +=  str[i]
        }
    }
   return(res)
};
 console.log(longestCommonPrefix(["dog","racecar","car"]))


