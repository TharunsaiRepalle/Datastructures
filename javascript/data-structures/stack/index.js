class Node {
    constructor(value) {
        this.value= value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.first = newNode;
        } 
        newNode.next = this.first;
        this.first = newNode
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) {
            return undefined;
        }

        const temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    printStack() {
        if(this.length === 0) {
            console.log('stack is empty');
            return
        }

        let curr = this.first;
        let stackElements = []
        while(curr !== null) {
            stackElements.push(curr.value);
            curr = curr.next;
        }

        return stackElements.reverse();
    }

    min() {
        if(this.length === 0) {
            return;
        }

        let curr = this.first;
        let min = curr.value;
        console.log(min)
        while(curr) {
            if(curr.value < min) {
                min = curr.value;
            }
            curr = curr.next;
        }

        return min
    }
}

let newStack = new Stack(0);
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log("push:::",newStack)
console.log("pop:::",newStack.pop())
console.log('print stack',newStack.printStack())
console.log('min value',newStack.min())


