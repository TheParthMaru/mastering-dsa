/**
 * Problem: Leetcode 1672 -> Richest customer wealth
 * 
 * Difficulty: Easy
 * Topics: Arrays, Matrix
 * 
 * Time complexity: O(mxn)
 * Space complexity: O(1)
 */

public class Solution {
    public int maximumWealth(int[][] accounts) {
        int maxWealth = 0;

        for (int i = 0; i < accounts.length; i++) {
            int sum = 0;
            for (int j = 0; j < accounts[0].length; j++) {
                sum += accounts[i][j];
            }

            maxWealth = Math.max(maxWealth, sum);
        }

        return maxWealth;
    }
}