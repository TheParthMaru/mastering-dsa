/**
 * Tags: Hash table, string
 * Difficulty: Easy
 *
 * Approach: Create mapping of s to t and vice versa
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
var isIsomorphic = function (s, t) {
	if (s.length != t.length) return false;

	let sMap = new Map();
	let tMap = new Map();

	for (let i = 0; i < s.length; i++) {
		let sChar = s[i];
		let tChar = t[i];

		if (!sMap.has(sChar)) {
			sMap.set(sChar, tChar);
		} else {
			if (sMap.get(sChar) !== tChar) {
				return false;
			}
		}

		if (!tMap.has(tChar)) {
			tMap.set(tChar, sChar);
		} else {
			if (tMap.get(tChar) !== sChar) {
				return false;
			}
		}
	}

	return true;
};
