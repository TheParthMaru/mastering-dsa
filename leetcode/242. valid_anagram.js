"use strict";

/**
 * Tags: Hash table, string, sorting
 * Difficulty: Easy
 *
 * Approach 1: Using split(), sort() and join()
 * Time complexity: O((m+n)log(m+n))
 * Space complexity: O(m+n)
 */

function solution(s, t) {
	let str1 = s.split("").sort().join("");
	let str2 = t.split("").sort().join("");

	return str1 === str2;
}

// console.log(solution("rat", "car"));

/**
 * Approach 2: Using obj, we add the frequency of s string to obj, then remove frequency
 * of t sring from obj. Then we check the frequency. If all values are 0 then it is anagram.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function isAnagram(s, t) {
	if (s.length !== t.length) return false;

	let obj = {};

	addFrequency(s, obj); // O(n)
	subtractFrequency(t, obj); // O(N)

	return checkFrequecy(obj); // O(N)
}

function addFrequency(s, obj) {
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]]) {
			obj[s[i]]++;
		} else {
			obj[s[i]] = 1;
		}
	}
}

function subtractFrequency(t, obj) {
	for (let i = 0; i < t.length; i++) {
		if (obj[t[i]]) {
			obj[t[i]]--;
		} else {
			obj[t[i]] = 1;
		}
	}
}

function checkFrequecy(obj) {
	let flag = true;
	for (let key in obj) {
		if (obj[key]) {
			flag = false;
			return flag;
		}
	}

	return flag;
}

console.log(isAnagram("atct", "catd"));
