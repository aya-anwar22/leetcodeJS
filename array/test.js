/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    })
    
    for(const[key, value] of map.entries()){
        let res = Math.abs(nums.indexOf(key) - nums.lastIndexOf(key));
        if(value > 1  && res <= k){
            return true
        }
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))