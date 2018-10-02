import TreeNode from './tree';

//Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// preorder traversal
var isSameTree = function (p, q) {
    let pTrav = [], qTrav = [];
    traverse(pTrav, p);
    traverse(qTrav, q);

    if (pTrav.length !== qTrav.length) return false;

    for (let i = 0; i < pTrav.length; i++) {
        if (pTrav[i] !== qTrav[i]) {
            return false;
        }
    }

    return true;
};

const traverse = (pArr, p) => {
    if (p === null) {
        pArr.push(null);
        return;
    } else {
        pArr.push(p.val);
    }

    traverse(pArr, p.left);
    traverse(pArr, p.right);
}

// A super slow approach that uses bst

var isSameTreeSlow = function (p, q) {
    const pTrav = bstTrav(p);
    const qTrav = bstTrav(q);

    if (pTrav.length !== qTrav.length) return false;

    for (let i = 0; i < pTrav.length; i++) {
        if (pTrav[i] !== qTrav[i]) {
            return false;
        }
    }

    return true;
};

const bstTrav = (p) => {
    let pArr = [];
    if (p === null) return pArr;
    let q = [p];
    let currentNode;
    while (q.length > 0) {
        currentNode = q.shift();
        pArr.push(currentNode.val);
        if (currentNode.left) {
            q.push(currentNode.left)
        } else if (currentNode.val !== null && !currentNode.left) {
            q.push(new TreeNode(null));
        }

        if (currentNode.right) {
            q.push(currentNode.right)
        } else if (currentNode.val !== null && !currentNode.right) {
            q.push(new TreeNode(null));
        }

        console.log(pArr);
    }

    return pArr;
}