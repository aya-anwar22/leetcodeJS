const map = new Map([[3, 4], [2, 1]]);

////////////Access to keys and values:////////////
map.keys();   // [3, 2]
map.values(); // [4, 1]

//// print values
for (const value of map.values()) {
  console.log(value);
}


//// print keys
for (const key of map.keys()) {
  console.log(key);
}

// To access the key associated with the value:
for (const [key, value] of map.entries()) {
    console.log(key,value );
}

/**
 * Dealing with Duplicate Items in a Map
 * The key in a Map must be unique.
 * If you enter the same key more than once, the old value will be overwritten.
 */

const nums = [3, 3, 3, 4];
const _map = new Map();
for(let i = 0; i < nums.length; i++){
  _map.set(nums[i], i);
}
console.log(_map);  // Map(2) { 3 => 2, 4 => 3 }



// Keep each index for each duplicate element
const my_map = new Map();
nums.forEach((num, i) => {
  if (!my_map.has(num)) my_map.set(num, []);
  my_map.get(num).push(i);
});
console.log(my_map);  // Map(2) { 3 => [0, 1, 2], 4 => [3] }


// Count the number of times each item appears
const countMap = new Map();
nums.forEach(num => {
  countMap.set(num, (countMap.get(num) || 0) + 1);
});
console.log(countMap);   // Map(2) { 3 => 3, 4 => 1 }

