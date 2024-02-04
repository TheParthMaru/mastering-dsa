/**
 * Problem tags: Arrays, hash table, sorting
 * Difficulty: Easy
 *
 * Approach: Creating a new Set from nums
 * Time complexity: O(n) (Because creating set from nums array of size n)
 * Space complexity: O(n)
 */

function solution(nums) {
	let mySet = new Set(nums);
	return !(mySet.size === nums.length);
}

/**
 * Approach: Using sorting
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */

function solution1(nums) {
	nums.sort((x, y) => {
		return x - y;
	});

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			return true;
		}
	}
	return false;
}
