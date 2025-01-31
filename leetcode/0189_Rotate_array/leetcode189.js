/**
 * Tags: Array, Math, Two pointer
 * Difficulty: Medium
 * 
 * Approach: In-place rotation using reverse
 * TC: O(N)
 * SC: O(1)
 */

var rotate = function (nums, k) {
    const reverse = (nums, start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++; end--;
        }
    }
    const n = nums.length;
    k = k % n;
    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
};