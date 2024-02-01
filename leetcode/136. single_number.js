/**
 * Tags: Arrays, Bit manipulation
 * Difficulty: Easy
 * Approach: Using bitwise XOR
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

var singleNumber = function (nums) {
	let result = 0;
	for (let element of nums) {
		result = result ^ element;
	}

	return result;
};
