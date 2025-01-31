/**
 * Tags: Array, Two pointers
 * Difficulty: Easy
 *
 * Approach: Two pointer
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution(nums) {
	let currUnique = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[currUnique] != nums[i]) {
			nums[currUnique + 1] = nums[i];
			currUnique++;
		}
	}

	return currUnique + 1;
}
