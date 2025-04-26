package leetcode;

public class Leetcode1929 {

    /**
     * Approach: Bruteforce
     * Time complexity: O(N)
     * Space complexity: O(1)
     */

    public int[] solution1(int[] nums) {
        int n = nums.length;
        int[] result = new int[2 * n];

        for (int i = 0; i < nums.length; i++) {
            result[i] = nums[i];
            result[i + n] = nums[i];
        }

        return result;
    }

    /**
     * Approach: Mathematical approach using modulus
     * Time complexity: O(N)
     * Space complexity: O(1)
     */
    public int[] solution2(int[] nums) {
        int n = nums.length;
        int[] result = new int[2 * n];

        for (int i = 0; i < n; i++) {
            result[i] = nums[i % n];
        }

        return result;
    }
}
