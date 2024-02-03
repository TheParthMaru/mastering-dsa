/**
 * Tags: Arrays, Two pointers
 * Difficulty: Easy
 *
 * Approach: Two pointer approach. If val detected, move it to the end.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

var removeElement = function (arr, val) {
	let i = 0;
	let j = arr.length - 1;
	let swaps = 0;

	while (i <= j) {
		if (arr[i] === val) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			swaps++;
			j--;
		} else {
			i++;
		}
	}

	let k = arr.length - swaps;
	return k;
};
