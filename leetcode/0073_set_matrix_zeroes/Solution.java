/**
 * Problem: Leetcode 73 -> Set matrix zeroes
 * Difficulty: Medium
 * Topics: Array, Hashtable, matrix
 * 
 * Time complexity: O(mxn)
 * Space complexity: O(1)
 */

public class Solution {
    public void setZeroes(int[][] matrix) {
        int totalRows = matrix.length;
        int totalCols = matrix[0].length;

        boolean isFirstRowZero = false;
        boolean isFirstColZero = false;

        // Checking if the first row has any 0
        for (int col = 0; col < totalCols; col++) {
            if (matrix[0][col] == 0) {
                isFirstRowZero = true;
                break;
            }
        }

        // Checking if the first col has any 0
        for (int row = 0; row < totalRows; row++) {
            if (matrix[row][0] == 0) {
                isFirstColZero = true;
                break;
            }
        }

        // Marking the first row and col 0 from [1,1] position
        for (int row = 1; row < totalRows; row++) {
            for (int col = 1; col < totalCols; col++) {
                if (matrix[row][col] == 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }

        // Setting elements to 0 based on the markings
        for (int row = 1; row < totalRows; row++) {
            for (int col = 1; col < totalCols; col++) {
                if (matrix[row][0] == 0 || matrix[0][col] == 0) {
                    matrix[row][col] = 0;
                }
            }
        }

        // Zero out the first row if required
        if (isFirstRowZero) {
            for (int col = 0; col < totalCols; col++) {
                matrix[0][col] = 0;
            }
        }

        // Zero out the first col if required
        if (isFirstColZero) {
            for (int row = 0; row < totalRows; row++) {
                matrix[row][0] = 0;
            }
        }
    }
}