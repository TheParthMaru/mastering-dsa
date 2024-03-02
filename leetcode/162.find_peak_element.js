/**
 * Tags: Array, Binary search
 * Difficulty: Medium
 * 
 * Approach: Similar to binary search
 * TC: O(logn)
 * SC: O(1)
 */

var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;

    const n = nums.length;
    let low = 0, high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        // Check if its first element
        if (mid - 1 < 0 && nums[mid] > nums[mid + 1]) return mid;

        // Check if its last element
        if (mid + 1 >= n && nums[mid] > nums[mid - 1]) return mid;

        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

        if (nums[mid] < nums[mid + 1]) {
            // Increasing sequence detected
            low = mid + 1;
        } else {
            // Decreasing sequence detected
            high = mid - 1;
        }
    }

    return -1;
};