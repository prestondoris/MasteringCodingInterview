class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  legnth() {
    return this.length;
  }

  add(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode.val;

  }

  remove(value) {
    let curNode = this.head;
    let prevNode = this.head;
    while(curNode != null) {
      if(curNode.val === value) {
        prevNode.next = curNode.next;
        this.length--;
        return value;
      }
      prevNode = curNode;
      curNode = curNode.next;
    }
    return undefined;
  }

  hasValue(value) {
    let curNode = this.head;
    while(curNode != null){
      if(curNode.val === value) {
        return true;
      }
      curNode = curNode.next;
    }
    return null;
  }

  print() {
    let curNode = this.head;
    for(let i=0; i<this.length; i++) {
      console.log(curNode.val);
      curNode = curNode.next;
    }
  }

}

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
} 

const myLL = new LinkedList();
myLL.add(3)
myLL.add(4);
myLL.add(10);
myLL.add(30);
console.log(myLL);
console.log(myLL.hasValue(10));
myLL.print();
myLL.remove(10);
myLL.print();