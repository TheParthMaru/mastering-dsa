/**
 * Problem: Leetcode 121 -> Best time to buy and sell stock
 * Tags: Arrays, DP
 * Difficulty: Easy
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class Solution {
    public int maxProfit(int[] prices) {
        int currentMinimumPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            // When to buy
            if (prices[i] < currentMinimumPrice) {
                currentMinimumPrice = prices[i];
            }

            // When to sell
            if (prices[i] > currentMinimumPrice) {
                int profit = prices[i] - currentMinimumPrice;
                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit;
    }
}
