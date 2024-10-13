/**
 * Problem: Leetcode -> 136. Single number
 * Tags: Arrays, Bit manipulation
 * Difficulty: Easy
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
public class Solution {
    public int singleNumber(int[] nums) {
        int result = nums[0];

        for (int i = 1; i < nums.length; i++) {
            result = result ^ nums[i];
        }

        return result;
    }
}
