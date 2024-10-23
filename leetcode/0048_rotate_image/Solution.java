/**
 * Leetcode: Problem 48 -> Rotate image
 * Tags: Array, Math, Matrix
 * Difficulty: Medium
 * Time complexity: O(mxn)
 * Space complexity: O(1)
 */

public class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        reverseCols(matrix, n);
        transpose(matrix, n);
    }

    public static void reverseCols(int[][] arr, int n) {
        for (int col = 0; col < n; col++) {
            int i = 0;
            int j = n - 1;

            while (i < j) {
                int temp = arr[i][col];
                arr[i][col] = arr[j][col];
                arr[j][col] = temp;

                i++;
                j--;
            }
        }
    }

    public static void transpose(int[][] arr, int n) {
        for (int row = 0; row < n; row++) {
            for (int col = row; col < n; col++) {
                int temp = arr[row][col];
                arr[row][col] = arr[col][row];
                arr[col][row] = temp;
            }
        }
    }
}
