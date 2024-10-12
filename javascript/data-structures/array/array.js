class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        const lastElement = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastElement;
    }

    get(index){
        return this.data[index];
    }

    shift() {
        const firstElement = this.data[0];
        //reindexing
        for(let i=0; i< this.length; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
        return firstElement
    }

    delete(index) {
        const item = this.data[index];
        //reindexing
        for(let i=index; i< this.length; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
        return item;
    }
}

const newArray = new MyArray();
newArray.push("Apple");
newArray.push("Oranges");
newArray.push("PineApple");
console.log(newArray)
console.log(newArray.get(1))
//newArray.pop();
//newArray.shift();
//newArray.delete(1);
console.log(newArray)