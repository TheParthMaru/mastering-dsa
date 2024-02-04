/**
 * Tags: Arrays, Simulation
 * Difficulty: Easy
 *
 * Approach: Mathematical approach using modulus
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

function solution(nums) {
	let ans = [];
	for (let i = 0; i < nums.length * 2; i++) {
		ans.push(nums[i % nums.length]);
	}
	return ans;
}

/**
 * Approach: Bruteforce
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

function solution2(nums) {
	let ans = [];
	let k = 0;
	for (let i = 0; i < nums.length * 2; i++) {
		if (k === nums.length) {
			k = 0;
		} else {
			ans.push(nums[k]);
			k++;
		}
	}
	return ans;
}

/**
 * Approach: Using built-in concat()
 * Time complexity: O(N+M)
 * Space complexity: O(N+M)
 */

function solution3(nums) {
	return nums.concat(nums);
}
