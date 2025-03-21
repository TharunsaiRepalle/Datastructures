/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Solution:
  Time COMPLEXITY : O(n lon n)
  space complexity : O(N)
**/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //sorting array by zeroth index.
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  result = [intervals[0]];

  for (let interval of intervals) {
    let e1 = result[result.length - 1][1];
    let s2 = interval[0];
    let e2 = interval[1];

    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(interval);
    }
  }

  return result;
};
