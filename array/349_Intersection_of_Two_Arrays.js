/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let diff = [...set1].filter(x => set2.has(x));
    return diff
};
console.log(intersection([1,2,2,1], [2,2]))