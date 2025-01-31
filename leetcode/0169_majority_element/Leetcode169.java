/**
 * Tags: Arrays, Hash table, Sorting, Divide and conquer, Counting
 * Difficulty: Easy
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class Leetcode169 {
    public int majorityElement(int[] nums) {
        int majority = nums[0]; // Initial candidate for majority
        int count = 1; // Start the counter at 1 because we assume the first element as majority

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == majority) {
                count++; // If current element matches the candidate, increment the count
            } else {
                count--; // Otherwise, decrement the count
                if (count == 0) {
                    majority = nums[i]; // Update majority candidate
                    count = 1; // Reset the counter
                }
            }
        }

        return majority;
    }
}
