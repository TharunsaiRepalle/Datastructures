//approach 1
function isPalindromeNum(number) {
    let numStr = number.toString()
    return numStr === numStr.split("").reverse().join("");
}

//approach2
function isPalindromeNum(x) {
  // Step 1: Rule out negative numbers as they are not palindromes
  if (x < 0) return false;

  let original = x,
    reversed = 0;
  // Step 2: Reverse the entire number mathematically
  while (x !== 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Step 3: Compare the original number with the reversed number to determine if the number is a palindrome
  return original === reversed;
}

function isPalindromeNum(x) {
     // Step 1: Exclude negative numbers and numbers that end with zero as they cannot be palindromes (except 0 itself)
     if (x < 0 || (x % 10 == 0 && x !== 0)) {
        return false;
    }

    let revertedNumber = 0;
    // Step 2: Keep reversing the second half of the number until it is greater or equal to the first half
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // Step 3: Check if the first half and the second half are equal, or if the first half and revertedNumber/10 are equal (for odd digit numbers)
    return x === revertedNumber || x === Math.floor(revertedNumber / 10); 
}

