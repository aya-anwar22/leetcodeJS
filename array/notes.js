// split vs splice 

// Splice    vs Slice

//combine vs Slice

// split, trim
//
//runtime complexity
function calculateTotal(grades) {
  let total = 0;
  grades.forEach(g => total += g.score);
  return total;
}

const studentGrades = [
  {name: 'Aya', score: 10},
  {name: 'Ali', score: 15},
];

console.log(calculateTotal(studentGrades)); // Output: 25
