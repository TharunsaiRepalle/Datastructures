package main
import "fmt"

type Queue struct {
	items []int
}

//ENQUEUE
func (q *Queue)ENQUEUE(v int) {
	q.items = append(q.items, v);
}

//DEQUEUE
func (q *Queue) DEQUEUE() int {
	toRemove := q.items[0];
	q.items = q.items[1:]
	return toRemove;
}

func main() {
	myQueue  := Queue{};
	myQueue.ENQUEUE(100);
	myQueue.ENQUEUE(200);
	myQueue.ENQUEUE(300);
	fmt.Println(myQueue);
	myQueue.DEQUEUE()
	fmt.Println(myQueue)
}