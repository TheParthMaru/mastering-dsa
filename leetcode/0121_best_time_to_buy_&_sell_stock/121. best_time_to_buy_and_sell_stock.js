/**
 * Tags: Arrays, DP
 * Difficulty: Easy
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution(prices) {
	let currentMin = prices[0];
	let profit = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > currentMin) {
			profit = Math.max(profit, prices[i] - currentMin);
		}

		if (prices[i] < currentMin) {
			currentMin = prices[i];
		}
	}

	return profit;
}
