/**
 * Problem: Leetcode 832 -> Flipping an image
 * Topic: Array, Two pointers, Bit manipulation, Matrix, Simulation
 * Difficulty: Easy
 * 
 * Time complexity: O(N X N) (n x n matrix)
 * Space complexity: O(1)
 */
public class Leetcode832 {
    public int[][] flipAndInvertImage(int[][] image) {
        reverseRows(image);
        flipImage(image);
        return image;
    }

    public static void reverseRows(int[][] mat) {
        int n = mat.length;
        for (int row = 0; row < n; row++) {
            int i = 0;
            int j = n - 1;

            while (i < j) {
                int temp = mat[row][i];
                mat[row][i] = mat[row][j];
                mat[row][j] = temp;
                i++;
                j--;
            }
        }
    }

    public static void flipImage(int[][] mat) {
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat.length; j++) {
                // if(mat[i][j] == 0) {
                // ++mat[i][j];
                // } else {
                // --mat[i][j];
                // }
                mat[i][j] = mat[i][j] ^ 1;
            }
        }
    }
}
