/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if(nums1[i] == 0 && i >= m){
            nums1[i] = nums2[i - m];
        }
    }
    return nums1.sort(function(a, b){return a - b});
};

console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2] , 3));