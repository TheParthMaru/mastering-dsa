/**
 * Tags: Arrays, Two pointers
 * Difficulty: Easy
 *
 * Approach: Two pointer approach. If val detected, move it to the end.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class Leetcode27 {
    public static int solution(int[] arr, int value) {
        int i = 0, j = arr.length - 1, k = 0;

        while (i <= j) {
            if (arr[i] == value) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j--;
            } else {
                i++;
                k++;
            }
        }

        return k;
    }
}
