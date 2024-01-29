/**
 * Tags: Arrays, Two pointers, Binary search
 * Difficulty: Medium
 *
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

var twoSum = function (numbers, target) {
	let i = 0;
	let j = numbers.length - 1;

	while (i < j) {
		if (numbers[i] + numbers[j] == target) {
			return [i + 1, j + 1];
		} else if (numbers[i] + numbers[j] < target) {
			i++;
		} else {
			j--;
		}
	}
};
