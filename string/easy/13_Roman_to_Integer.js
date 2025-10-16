/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
const myMap = {
  I: 1, V: 5,
  X: 10, L: 50,
  C: 100, D: 500,
  M: 1000,
};

let total = 0;

for (let i = 0; i < s.length; i++) {
  const current = myMap[s[i]];
  const prev = myMap[s[i - 1]]; 
  if (i > 0 && prev < current) {
    total += current - 2 * prev;
  } else {
    total += current;
  }
}

return total
    
};

console.log(romanToInt('IV'))