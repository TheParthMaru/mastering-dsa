/**
 * Topics: Arrays, Two pointers
 * Difficulty: Medium
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class Leetcode31 {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        int breakpoint = -1, idxBreakpoint = -1;

        for (int i = n - 1; i > 0; i--) {
            if (nums[i] > nums[i - 1]) {
                breakpoint = nums[i - 1];
                idxBreakpoint = i - 1;
                break;
            }
        }

        if (idxBreakpoint != -1) {
            for (int j = n - 1; j >= idxBreakpoint + 1; j--) {
                if (nums[j] > breakpoint) {
                    int temp = nums[j];
                    nums[j] = nums[idxBreakpoint];
                    nums[idxBreakpoint] = temp;

                    break;
                }
            }
        }

        reverse(nums, idxBreakpoint + 1, n - 1);
    }

    public static void reverse(int[] arr, int start, int end) {
        while (start <= end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }
}
