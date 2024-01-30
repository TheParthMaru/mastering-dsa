/**
 * Tags: String, Trie
 * Difficulty: Easy
 *
 * Time complexity: O(nlogn + m)
 * Space complexity: O(N)
 */

var longestCommonPrefix = function (strs) {
	strs.sort();
	let str1 = strs[0];
	let str2 = strs[strs.length - 1];

	let result = "";
	let i = 0;

	while (i < str1.length && i < str2.length) {
		if (str1[i] != str2[i]) {
			break;
		}
		result += str1[i];
		i++;
	}

	return result;
};
