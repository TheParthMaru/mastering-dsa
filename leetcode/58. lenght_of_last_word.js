/**
 * Difficulty: Easy
 * Tags: String
 *
 * Approach: This approach is simplest but creates an additional arr.
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

function solution(s) {
	s = s.trim();
	let sArr = s.split(" ");
	return sArr[sArr.length - 1].length;
}
