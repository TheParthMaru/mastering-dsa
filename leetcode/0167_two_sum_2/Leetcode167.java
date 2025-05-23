/**
 * Problem: Leetcode 167 -> Two sum 2, input array is sorted
 * Topics: Arrays, Two pointers, Binary search
 * Difficulty: Medium
 * 
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class Leetcode167 {
    public int[] twoSum(int[] numbers, int target) {
        int[] result = new int[2];

        int i = 0;
        int j = numbers.length - 1;

        while (i < j) {
            int sum = numbers[i] + numbers[j];
            if (sum == target) {
                result[0] = i + 1;
                result[1] = j + 1;
                return result;
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }

        return result;
    }
}
