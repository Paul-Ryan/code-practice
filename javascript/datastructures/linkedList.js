class LinkedList {
  constructor(val) {
    this.head = new ListNode(val);
  }

  add(val) {
    const newNode = new ListNode(val);
    let lastNode = this.getLastNode(this.head);
    lastNode.next = newNode;
  }

  getLastNode() {
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    return lastNode;
  }

}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list = new LinkedList(8);
console.log(list);

list.add(9);
list.add(3);
list.add(2);
list.add(10);
console.log(list);
