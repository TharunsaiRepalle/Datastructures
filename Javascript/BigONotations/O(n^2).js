function findPairs(arr) {
  //O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]} , ${arr[j]}`);
    }
  }
}

const numbers = [1, 2, 3, 4, 5];

findPairs(numbers);