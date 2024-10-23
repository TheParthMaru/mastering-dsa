
/**
 * Problem: Leetcode 54 -> Spiral Matrix
 * Tags: Arrays, Matrix, Simulation
 * Difficulty: Medium
 * 
 * Time complexity: O(mxn)
 * Space complexity: O(1)
 */

import java.util.*;

public class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();

        int startRow = 0;
        int endRow = matrix.length - 1;
        int startCol = 0;
        int endCol = matrix[0].length - 1;

        while (startRow <= endRow && startCol <= endCol) {
            for (int x = startCol; x <= endCol; x++) {
                result.add(matrix[startRow][x]);
            }
            ++startRow;

            for (int x = startRow; x <= endRow; x++) {
                result.add(matrix[x][endCol]);
            }
            --endCol;

            if (startRow <= endRow) {
                for (int x = endCol; x >= startCol; x--) {
                    result.add(matrix[endRow][x]);
                }
                --endRow;
            }

            if (startCol <= endCol) {
                for (int x = endRow; x >= startRow; x--) {
                    result.add(matrix[x][startCol]);
                }
                startCol++;
            }
        }
        return result;
    }
}