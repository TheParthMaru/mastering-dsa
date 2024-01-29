/**
 * Tags: Arrays, Hash table
 * Difficulty: Easy
 *
 * Approach 1: Brute force
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */

function foo(arr, target) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}
}

/**
 * Approach 2: Using hash map
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

function foo(nums, target) {
	let myMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const temp = target - nums[i];
		if (myMap.has(temp)) {
			return [i, myMap.get(temp)];
		}
		myMap.set(nums[i], i);
	}
}
