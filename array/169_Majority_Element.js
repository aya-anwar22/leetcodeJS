/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  const map = new Map();

nums.forEach(num => {
  map.set(num, (map.get(num) || 0) + 1);
});
  const len = nums.length / 2;
  for(const[key, value] of map.entries()){
    if(map.size === 1) return key

    if(value > len){
          return key
        }
  }

  
};
console.log(majorityElement([3,3,3,4]))


