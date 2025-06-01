public class Leetcode198 {

    /**
     * Approach 1: Solving it using basic recursion
     * This will result in TLE on leetcode as we need to optimize it using DP.
     * 
     * Time complexity: O(2^n)
     * Space complexity: O(n)
     */

    public static int rob(int[] nums, int idx) {
        // Base case, if no house then no profit
        if (idx >= nums.length) {
            return 0;
        }
        return Math.max(nums[idx] + rob(nums, idx + 2), 0 + rob(nums, idx + 1));
    }
}
