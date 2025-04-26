/**
 * Tags: Arrays, Simulation
 * Difficulty: Easy
 *
 * Approach: Bruteforce
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution1(nums) {
	let ans = [];
	const n = nums.length;

	for (let i = 0; i < n; i++) {
		ans[i] = nums[i];
		ans[i + n] = nums[i];
	}

	return ans;
}

/**
 * Approach: Mathematical approach using modulus
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution2(nums) {
	let ans = [];
	for (let i = 0; i < nums.length * 2; i++) {
		ans.push(nums[i % nums.length]);
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
