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

/**
 * Approach 2: Improving the space complexity but not creating additional array
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

var lengthOfLastWord = function (s) {
	let firstChar = false;
	let lenLastWord = 0;

	// Looping over the string from the end
	for (let i = s.length - 1; i >= 0; i--) {
		// Checking if the current character is not a whitespace
		if (s[i] !== " ") {
			firstChar = true;
			lenLastWord++;
		}

		// If the current character is a whitespace and we have already found the first non
		// whitespace char
		if (s[i] === " " && firstChar) {
			break;
		}
	}

	return lenLastWord;
};
