package main
import "fmt"


//Node
type Node struct {
	Key int
	Left *Node
	Right *Node
}

//Insert Will add a node to the tree
// the key to add should not be already in the tree
func (n *Node) Insert(k int) {
	if n.Key < k {
		//move right
		if n.Right == nil {
			n.Right = &Node{Key: k}
		} else {
			n.Right.Insert(k)
		}
	} else if n.Key > k {
		//move left
		if n.Left == nil {
			n.Left = &Node{Key: k}
		} else {
			n.Left.Insert(k)
		}
	}
}

//Search will take in a key value
// and return true if there us a node with the value
func (n *Node) Search(k int) bool {
	if n == nil {
		return false;
	}

	if n.Key < k {
		//move right
		return n.Right.Search(k)
	} else if n.Key > k {
		//move left
		return n.Left.Search(k)
	}
	return true;
}

func main() {
	tree := &Node{ Key : 100 };
	tree.Insert(200)
	tree.Insert(300)
	fmt.Println(tree)
	tree.Insert(50)
	tree.Insert(67)
	tree.Insert(45)
	fmt.Println(tree.Search(67))
	fmt.Println(tree.Search(300))
	fmt.Println(tree.Search(400))
	fmt.Println(tree.Search(00))
}