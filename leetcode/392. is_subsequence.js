/**
 * Difficulty: Easy
 * Tags: Strings, DP, Two pointers
 *
 * Approach: Use a simple two pointer approach to match the characters of both the strings
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

function solution(s, t) {
	let i = 0;
	for (let j = 0; j < t.length; j++) {
		if (s[i] == t[j]) i++;
	}

	return i == s.length;
}
