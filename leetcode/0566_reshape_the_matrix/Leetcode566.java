/**
 * Leetcode: Problem 566 -> Reshape the matrix
 * Topic: Array, Matrix, Simulation
 * Difficulty: Easy
 * 
 * Time complexity: O(mxn)
 * Space complexity: O(1)
 */

public class Leetcode566 {
  public int[][] matrixReshape(int[][] mat, int r, int c) {
    int m = mat.length;
    int n = mat[0].length;

    // When the data cannot be reshaped, simply return the orignal matrix
    if (m * n != r * c) {
      return mat;
    }

    int[][] result = new int[r][c];
    int row = 0;
    int col = 0;

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        result[row][col] = mat[i][j];
        col++;

        if (col == c) {
          ++row;
          col = 0;
        }
      }
    }

    return result;
  }
}