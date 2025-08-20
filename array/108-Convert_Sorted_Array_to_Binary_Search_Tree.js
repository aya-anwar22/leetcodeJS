/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function sortedArrayToBSTRecur(nums, start, end){
    if(start > end) return null;
    let mid = start + Math.floor((end - start) /2)
    let root = new Node(nums[mid])

    root.left = sortedArrayToBSTRecur(nums, start, mid - 1)
    root.right = sortedArrayToBSTRecur(nums, mid + 1, end);
    return root;
}
var sortedArrayToBST = function(nums) {
    return sortedArrayToBSTRecur(nums, 0, nums.length - 1);

};

function preOrder(root){
    if(root === null) return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right)
}
const nums = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(nums);
preOrder(root);