/**
 * Tags: Arrays
 * Difficulty: Easy
 *
 * Approach: Start from back and substitute the current element with the max. Then calculate the next max between current element and current max.
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution(arr) {
	let max = -1;
	for (let i = arr.length - 1; i >= 0; i--) {
		let num = arr[i];
		arr[i] = max;
		max = Math.max(max, num);
	}

	return arr;
}
