/** Node: node for a singly linked list */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Circularly Linked List: chained together nodes, where the tail's next node is the head */

class CircularlyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) { // list is empty, new node is both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** traverse the circularly linked list 'num' nodes from the starting value */

  traverse(startVal, num) {
    let traversed = [];
    let currentNode = this.head;
    while (currentNode.val !== startVal) {
      currentNode = currentNode.next;
    }
    for (let i = 0; i < num; i++) {
      traversed.push(currentNode.val);
      currentNode = currentNode.next
    }
    return traversed;
  }
}

export default CircularlyLinkedList;