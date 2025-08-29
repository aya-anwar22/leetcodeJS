/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let max = prices[0];
  let arr = []
  if(prices.length == 1) return 0
  for(let i = 1; i < prices.length; i++){
    if(prices[i] >= max){
      max = prices[i]
      arr.push(max - min)

    } else if (prices[i] < min){
      min = prices[i]
      max = prices[i]
      arr.push(max - min)
    }
  }
  let maxArr = arr[0]
  for(let j =1; j < arr.length; j++){
    if(maxArr < arr[j]){
      maxArr = arr[j]
    }
  }
  return (maxArr)
}

console.log(maxProfit([3,3]))