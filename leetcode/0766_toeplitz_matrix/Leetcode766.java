/**
 * Problem: Leetcode 766 -> Toeplitz matrix
 * Topics: Array, Matrix
 * Difficulty: Easy
 * 
 * Time complexity: O(m x n)
 * Space complexity: O(1)
 */
public class Leetcode766 {
    public boolean isToeplitzMatrix(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;

        if (m * n == 1) {
            return true;
        }

        for (int row = 1; row < m; row++) {
            for (int col = 1; col < n; col++) {
                if (matrix[row][col] != matrix[row - 1][col - 1]) {
                    return false;
                }
            }
        }

        return true;
    }
}
