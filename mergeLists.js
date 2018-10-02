//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

import ListNode from './node';

var mergeTwoLists = function (l1, l2) {
    let node = new ListNode(null);
    if (!l1 && !l2) {
        return [];
    } else if (!l1 && l2) {
        node.val = l2.val;
        if (l2.next) {
            node.next = mergeTwoLists(null, l2.next);
        }
    } else if (l1 && !l2) {
        node.val = l1.val;
        if (l1.next) {
            node.next = mergeTwoLists(l1.next, null);
        }
    } else if (l1 && l1.val < l2.val) {
        node.val = l1.val;
        node.next = mergeTwoLists(l1.next, l2);
    } else {
        node.val = l2.val;
        node.next = mergeTwoLists(l1, l2.next);
    }

    return node;
};