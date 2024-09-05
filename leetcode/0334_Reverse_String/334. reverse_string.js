/**
 * Tags: Two pointers, String
 * Difficulty: Easy
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

var reverseString = function (s) {
	let i = 0,
		j = s.length - 1;

	while (i <= j) {
		[s[i], s[j]] = [s[j], s[i]];
		i++;
		j--;
	}
};
