"use strict";

/**
 * Tags: Arrays, Simulation
 * Difficulty: Easy
 *
 * Approach 1:
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

function solution(nums) {
	let ans = [];
	for (let i = 0; i < nums.length * 2; i++) {
		ans.push(nums[i % nums.length]);
	}
	return ans;
}
