/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();   /// 2 

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.delete(nums[i])
        } else {
            map.set(nums[i], i)  
        }
    }
    let key = map.keys().next().value;
    return key
};
console.log(singleNumber([2,2,1]))