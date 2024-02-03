/**
 * Tags: String, Trie
 * Difficulty: Easy
 *
 * Approach: Bruteforce
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */

function solution(strs) {
	// Storing the first element for comparing with rest of the elements
	let prefix = strs[0];
	let j = 0;

	// Starting with 1 because first element is already stored in prefix
	for (let i = 1; i < strs.length; i++) {
		let currWord = strs[i];
		while (
			j < prefix.length &&
			j < currWord.length &&
			prefix[j] === currWord[j]
		) {
			j++;
		}

		prefix = prefix.substring(0, j);

		if (prefix == "") {
			break;
		}
	}

	return prefix;
}

/**
 * Approach: Sorting the input array
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
