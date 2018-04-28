/*
 Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }


 @param {ListNode} l1
 @param {ListNode} l2
 @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let listHead = new ListNode(0);
  let prevNode = listHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let value = 0;

    if (l1 && l2) {
      value = l1.val + l2.val + carry;
    } else if (l1) {
      value = l1.val + carry;
    } else if (l2) {
      value = l2.val + carry;
    } else {
      value = carry;
    }

    prevNode.next = new ListNode(value % 10);
    value >= 10 ? carry = 1 : 0;
    prevNode = prevNode.next;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  return listHead.next;
};
