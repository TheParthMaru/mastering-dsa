/**
 * Problem: Leetcode 867 -> Transpose matrix
 * Tags: Array, Matrix, Simulation
 * Difficulty: Easy
 * 
 * Time complexity: O(m x n)
 * Space complexity: O(m x n)
 */

public class Leetcode867 {
    public int[][] transpose(int[][] matrix) {
        int totalRows = matrix.length;
        int totalCols = matrix[0].length;

        int[][] result = new int[totalCols][totalRows];

        for(int row = 0; row < totalRows; row++) {
            for(int col = 0; col < totalCols; col++) {
                result[col][row] = matrix[row][col];
            }
        }

        return result;
    }
}
