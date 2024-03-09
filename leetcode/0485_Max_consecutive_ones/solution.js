/**
 * Tags: Arrays
 * Difficulty: Easy
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

var findMaxConsecutiveOnes = function (nums) {
	if (nums.length == 0) return 0;
	let maxOnes = 0;
	let currentCount = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			currentCount++;
		} else {
			currentCount = 0;
		}
		maxOnes = Math.max(maxOnes, currentCount);
	}

	return maxOnes;
};
