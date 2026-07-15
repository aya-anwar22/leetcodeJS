/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if(map.has(res)){
            return [map.get(res), i];

        } else {
            map.set(nums[i],i)
        }
    }
}

console.log(twoSum([2,7,11,15],  9))







////////////////////////////////////////  EXAMPLES  /////////////////////////////////
const map = new Map();

map.set(2, 0);
map.set(7, 1);
map.set(11, 2);

console.log(map.get(7));  // return value   =>  1
console.log(map.has(11)); // return  true or false  => true
map.set(15, 3);
////////////// Key //////////////
for (const key of map.keys()) {
    console.log(key);
}

////////////// Value //////////////

for (const value of map.values()) {
    console.log(value);
}
////////////// Key & Value //////////////

for (const entry of map.entries()) {
    console.log(entry);
}
////////////// Key & Value //////////////

for (const [key, value] of map) {
    console.log(key, value);
}
////////////// Key & Value //////////////

map.forEach((value, key) => {
    console.log(key, value);
});