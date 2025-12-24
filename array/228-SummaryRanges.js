// nums =[0,2,3,4,6,8,9]
// // nums = [1,2,3];
// let start = nums[0];
// arr =[]
// for(let i=0; i<nums.length; i++){

//     if(nums[i+1] !== nums[i]+1){
//         end = nums[i];
//         if (!arr.includes(start) ){
//             arr.push(start)
//         }
//         if(!arr.includes(end)){
//             arr.push(end)
//         }
//         console.log(start, end)
//         start = nums[i] + 2;
//     }
// }

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0];
    arr =[]
    for(let i=0; i<nums.length; i++){

        if(nums[i+1] !== nums[i]+1){
            end = nums[i];
            if (!arr.includes(start) ){
                if (start === end) {
                    arr.push(`${start}`)
                }
                else {
                arr.push(`${start}->${end}`)
            }
            } 
        
            start = nums[i + 1];

            
        }
    }
        return(arr)


};
console.log(summaryRanges([0,1,2,4,5,7]))
