/**
* when is word is same even after reversing then it is palindrome.
**/

//Approach1
const isStrPalindrome = (str) => str.split("").reverse().join("") === str;

//Approach2
function isStrPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; //forward character
    let y = str[j - i]; //backward character
    if (x != y) {
      // Return false if string not match
      return false;
    }
  }
  // Return true if string is palindrome
  return true;
}

//Approach3
function isStrPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

//Approach4
function isStrPalindrome(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - index - 1]);
}

console.log(isStrPalindrome("madam")); // Output: true
console.log(isStrPalindrome("test")); // Output: false
console.log(isStrPalindrome("abba")); // Output: true
