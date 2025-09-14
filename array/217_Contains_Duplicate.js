/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();

    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1)
    })
    for(const value of map.values()){
        if(value > 1){
            return true
        }
    }
    return false
     
};

console.log(containsDuplicate([1,2,3,11]))