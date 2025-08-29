
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    // Find Middle Element
    let mid = start + Math.floor((end - start) / 2);
    // Create root node
    let root = new Node(arr[mid]);
    // Create left subtree
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
    // Create right subtree
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);
    return root;
}

// create tree.
function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}

function preOrder(root) {
    if (root === null) return;

    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

const arr = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(arr);
preOrder(root);
