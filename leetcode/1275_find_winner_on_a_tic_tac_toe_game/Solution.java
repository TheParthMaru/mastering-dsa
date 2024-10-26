/**
 * Problem: Leetcode 1275: Find winner on a tic tac toe game
 * Topics: Array, Hash table, matrix, Simulation
 * Difficulty: Easy
 * 
 * Time complexity: O(N) where N in number of moves
 * Space complexity: O(1)
 * 
 */

public class Solution {
    public String tictactoe(int[][] moves) {
        String[][] grid = { { " ", " ", " " }, { " ", " ", " " }, { " ", " ", " " } };

        for (int i = 0; i < moves.length; i++) {
            int[] currentMove = moves[i];
            int x = currentMove[0];
            int y = currentMove[1];

            String player = i % 2 == 0 ? "A" : "B";
            grid[x][y] = player;

            if (checkWinner(grid, player)) {
                return player;
            }
        }

        return moves.length == 9 ? "Draw" : "Pending";
    }

    public static boolean checkWinner(String[][] grid, String player) {
        for (int i = 0; i < 3; i++) {
            // Check row
            if (grid[i][0].equals(player) && grid[i][1].equals(player) && grid[i][2].equals(player)) {
                return true;
            }

            // Check col
            if (grid[0][i].equals(player) && grid[1][i].equals(player) && grid[2][i].equals(player)) {
                return true;
            }
        }

        boolean mainDiagonal = grid[0][0].equals(player) && grid[1][1].equals(player) && grid[2][2].equals(player);
        boolean antiDiagonal = grid[0][2].equals(player) && grid[1][1].equals(player) && grid[2][0].equals(player);

        return mainDiagonal || antiDiagonal;
    }
}