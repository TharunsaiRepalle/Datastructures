/***
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 Notice that the solution set must not contain duplicate triplets.

 Example 1:
 Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]
 Explanation: 
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Time COMPLEXITY : O(N)
 * space complexity : O(N)
 */
 
var twoSum = function(j, target, nums) {
  let k = nums.length -1;
  let result = [];

  while(j < k) {
      let leftVal = nums[j];
      let rightVal = nums[k];

      if(leftVal + rightVal > target) {
          k--;
      } else if(leftVal + rightVal < target) {
          j++;
      } else  {
          result.push([(target * -1), leftVal , rightVal]);
          while(j < k && nums[j] === nums[j+1]) j++;
          while(j < k && nums[k] === nums[k-1]) k--;
          j++;
          k--; 
      }
  }

  return result
}

var threeSum = function(nums) {
  nums.sort((a,b) => a -b)
  let result = [];

  for(let i= 0;i < nums.length ; i++) {
      if( nums[i] ===  nums[i - 1]) continue;

      let target = nums[i] * -1;
      let subResult = twoSum(i+1, target, nums);
      result.push(...subResult)
  }

  return result
};