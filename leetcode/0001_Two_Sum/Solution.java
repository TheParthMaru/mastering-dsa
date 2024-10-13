
/**
 * Problem: Leetcode 1 -> Two sum
 * Tags: Arrays, Hash table
 * Difficulty: Easy
 */

import java.util.*;

public class Solution {

    /**
     * Approach 1: Brute force
     * Time complexity: O(N^2)
     * Space complexity: O(1)
     */

    public int[] approach1(int[] arr, int target) {
        int[] result = new int[2];
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    result[0] = i;
                    result[1] = j;
                }
            }
        }

        return result;
    }

    /**
     * Approach 2: Using Maps
     * Time complexity: O(n)
     * Space complexity: O(n)
     */
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> freq = new HashMap<>();
        int[] arr = new int[2];

        for (int i = 0; i < nums.length; i++) {
            int temp = target - nums[i];
            if (!freq.containsKey(temp)) {
                freq.put(nums[i], i);
            } else {
                arr[0] = freq.get(temp);
                arr[1] = i;
            }
        }

        return arr;
    }
}
