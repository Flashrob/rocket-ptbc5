// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(head, position) {
    
    let prev;
    let curr = head;
    let index = 0;
    
    while (curr) {
        
        if (index === position) {
            if (prev) {
                prev.next = curr.next;
                return head;  
            }

            head = curr.next;
            return head;
        }
        
        index++;
        prev = curr;
        curr = curr.next;
    }
    return head;
}