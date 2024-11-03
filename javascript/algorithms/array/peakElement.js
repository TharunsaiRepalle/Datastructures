/**
 162. Find Peak Element

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6. 
 **/

//approach 1
//TC: 0(N) SC :0(1)
var findPeakElement = function (nums) {
  if (nums.length === 1 || nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = nums[i];
    let mid = nums[i + 1];
    let right = nums[i + 2];

    if (mid > left && mid > right) return i + 1;
  }
};

//aproach 2 using binary search
//TC: 0(log n) SC: O(1)
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
