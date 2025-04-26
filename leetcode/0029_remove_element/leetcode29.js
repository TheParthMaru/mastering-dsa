/**
 * Tags: Arrays, Two pointers
 * Difficulty: Easy
 *
 * Approach: Two pointer approach. If val detected, move it to the end.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution(nums, value) {
	let i = 0,
		j = nums.length - 1,
		k = 0;

	while (i <= j) {
		if (nums[i] == value) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			j--;
		} else {
			i++;
			k++;
		}
	}

	return k;
}
