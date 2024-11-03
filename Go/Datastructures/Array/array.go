package main

import "fmt"

func main() {
	//Declaration and init of slice/array
	arr := []int{1, 2, 3, 4, 5}
	fmt.Printf("Array elements: %v\n", arr)

	//accessing elements...O(1)
	fmt.Printf("Element at index 2 :%d \n", arr[2])

	//modifing the element...O(1)
	arr[2] = 10;
	fmt.Printf("Array after modifying: %v", arr);

	//inserting an element
	index := 2
	value := 5

	arr = append(arr, )
}