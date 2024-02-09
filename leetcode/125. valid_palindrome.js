/**
 * Tags: Two pointer, String
 * Difficulty: Easy
 * Approach: Bruteforce
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

var isPalindrome = function (s) {
	if (s == "" || s == " ") return true;

	s = s.toLowerCase();
	let temp = "";
	for (let i = 0; i < s.length; i++) {
		if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "0" && s[i] <= "9")) {
			temp += s[i];
		}
	}

	let reverse = "";
	for (let i = temp.length - 1; i >= 0; i--) {
		reverse += temp[i];
	}

	return temp == reverse;
};

/**
 * Improving the space complexity
 */
var isPalindrome = function (s) {
	s = s.replace(/[\W_]/g, "").toLowerCase();

	let left = 0;
	let right = s.length - 1;

	while (right >= left) {
		if (s[left] !== s[right]) {
			return false;
		}

		right--;
		left++;
	}

	return true;
};
