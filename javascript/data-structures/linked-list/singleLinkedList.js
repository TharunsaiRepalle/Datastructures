class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next !== null) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //add node to first element of the linkedlist
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // remove first node of the linkedlist
  shift() {
    if (!this.head) {
      return undefined;
    }

    //point the first node/element
    let temp = this.head;
    //move node to next node/element
    this.head = this.head.next;
    //remove first node/element
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }

  get(index) {
    let counter = 0;
    let temp = this.head;

    while(temp) {
      if(counter === index){
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }  

  set(index,value) {
    let temp = this.get(index);
    if(temp){
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index,value) {
    if(index === 0) {
      return this.unshift(value)
    }

    if(index === this.length) {
      return this.push(value)
    }

    const newNode = new Node(value);
    const temp = this.get(index-1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  clear() {
    this.head = null;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList);

// myLinkedList.pop();
// console.log(myLinkedList);

// myLinkedList.unshift(0);
// console.log(myLinkedList);

// myLinkedList.shift(0);
// console.log(myLinkedList);

// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.get(1))

// myLinkedList.set(1,10)
// console.log(myLinkedList)

// myLinkedList.insert(2,10)
// console.log(myLinkedList)

// console.log(myLinkedList.size())

// myLinkedList.clear()
// console.log(myLinkedList)

