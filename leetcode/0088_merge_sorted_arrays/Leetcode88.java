/**
 * Tags: arrays, two pointers, sorting
 * Difficulty: Easy
 */

public class Leetcode88 {

    /**
     * Approach: Traditional merging approach
     * Time complexity: O(m + n)
     * Space complexity: O(m + n)
     * 
     */

    public static int[] mergeSortedArrays1(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;

        int i = 0, j = 0, k = 0;
        int[] result = new int[m + n];

        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                result[k++] = nums1[i++];
            } else {
                result[k++] = nums2[j++];
            }
        }

        while (i < m) {
            result[k++] = nums1[i++];
        }

        while (j < n) {
            result[k++] = nums2[j++];
        }

        return result;
    }
}
