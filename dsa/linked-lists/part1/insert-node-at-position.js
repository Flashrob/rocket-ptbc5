// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(head, data, position) {
    let prev;
    let curr = head;
    let index = 0;
    
    while (curr) {
        
        if (index === position) {
            const newNode = new SinglyLinkedListNode(data)
            prev.next = newNode;
            newNode.next = curr;
            return head;
        }
        
        index++;
        prev = curr;
        curr = curr.next;
    }
    
    return head;
}

