"use strict";

/**
 * Problem tags: Arrays, hash table, sorting
 * Difficulty: Easy
 *
 * Approach 1: Creating a new Set from nums
 * Time complexity: O(n) (Because creating set from nums array of size n)
 * Space complexity: O(n)
 */

function solution(nums) {
	let mySet = new Set(nums);
	if (nums.length === mySet.size) return false;
	return true;
}
