// https://leetcode.com/problems/remove-linked-list-elements

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let prev;
    let curr = head;

    while (curr) {
        if (!head) return head;
        if (curr.val === val) {
            if (prev) {
                prev.next = curr.next;
                curr = curr.next;
                continue;
            }
                head = curr.next;
                curr = head;
                continue;
        }
        prev = curr;
        curr = curr.next;
    }

    return head

};