// Create a hard-coded linked list:
// 10 -> 20 -> 30 -> 40 -> 50 -> 60

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

function lengthOfList(val) {
    let length = 0;

    while(val){
        length++;
        val = val.next
    }
    return length;
} 

function middleOfList(head) {
   let getLength = lengthOfList(head);

   let mid_index = Math.floor(getLength/2);

   //traversing the middindex
   while(mid_index --> 0) {
    head = head.next
   }

   return head.value;
}

  

console.log(middleOfList(head))