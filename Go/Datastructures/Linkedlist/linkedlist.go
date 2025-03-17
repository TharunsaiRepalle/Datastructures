package main
import "fmt"

type node struct {
	data int
	next *node
}

type linkedList struct {
	head *node
	length int
}

func (l *linkedList) addElement(n *node) {
	temp := l.head;
	l.head = n;
	l.head.next = temp;
	l.length++;
}

func (l linkedList)  printListData() {
	toPrint := l.head;
	for l.length != 0 {
		fmt.Printf("%d\n", toPrint.data)
		toPrint = toPrint.next;
		l.length--;
	}
}

func (l *linkedList) removeElement(value int) {

	if l.length == 0 {
		return;
	}

	if l.head.data == value {
		l.head = l.head.next;
		l.length--;
		return;
	}

	previousToDelete := l.head;
	for previousToDelete.next.data != value {
		if previousToDelete.next.next  == nil {
			return
		}
		previousToDelete = previousToDelete.next;
	}
	previousToDelete.next = previousToDelete.next.next;
	l.length--;

}

func main() {
	myList  :=linkedList{}

	node1 := &node{ data: 48}
	node2 := &node { data: 18}
	node3 := &node { data: 20}

	myList.addElement(node1)
	myList.addElement(node2)
	myList.addElement(node3)
	//fmt.Println((myList))
	myList.printListData()
	myList.removeElement(18)
	myList.printListData()
}