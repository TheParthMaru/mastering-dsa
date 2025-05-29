/**
 * Problem: Leetcode 485 -> Max consective ones
 * Tags: Arrays
 * Difficulty: Easy
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class Leetcode485 {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int counter = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                ++counter;
                max = Math.max(max, counter);
            } else {
                counter = 0;
            }
        }
        return max;
    }
}
