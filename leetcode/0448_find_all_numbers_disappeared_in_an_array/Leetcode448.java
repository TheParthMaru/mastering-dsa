
/**
 * Problem: Leetcode 448 -> Find all numbers disappeared in an array
 * Tags: Arrays, Hash Table
 * Difficulty: Easy
 */

import java.util.*;

public class Leetcode448 {

    /**
     * Approach 01: Bruteforce approach
     * Time complexity: O(n)
     * Space complexity: O(n)
     */

    public static List<Integer> approach1(int[] arr) {
        List<Integer> result = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            int element = arr[i];

            if (!map.containsKey(element)) {
                map.put(element, element);
            }
        }

        for (int i = 1; i <= arr.length; i++) {
            if (!map.containsKey(i)) {
                result.add(i);
            }
        }

        return result;
    }

    /**
     * Approach 02: Improving the space complexity
     * Time complexity: O(n)
     * Space complexity: O(1)
     */

    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            int currentElement = Math.abs(nums[i]);
            int index = currentElement - 1;

            if (nums[index] > 0) {
                nums[index] *= -1;
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                result.add(i + 1);
            }
        }

        return result;
    }
}
