/**
 * Approach: Using frequency mapper
 * Time complexity: O(n) or O(m)
 * Space complexity: O(n) extra map created
 */
var intersection = function (nums1, nums2) {
	let freqNums1 = {};
	for (let i = 0; i < nums1.length; i++) {
		let element = nums1[i];
		if (freqNums1[element]) {
			freqNums1[element]++;
		} else {
			freqNums1[element] = 1;
		}
	}

	let freqNums2 = {};
	for (let i = 0; i < nums2.length; i++) {
		let element = nums2[i];
		if (freqNums1[element]) {
			freqNums2[element] = 1;
		}
	}

	return Object.keys(freqNums2);
};

/**
 * Approach 2: Using Set
 *
 * Time complexity: O(n) because we are only looping over the set.
 * Space complexity: O(m + n + k) because we are creating two sets and the result array.
 */

function intersection2(nums1, nums2) {
	let set1 = new Set(nums1); // O(N) space
	let set2 = new Set(nums2); // O(M) space
	let result = []; // O(K) space
	for (const element of set1) {
		// This check will take O(1) time
		if (set1.has(element)) {
			result.push(element);
		}
	}

	return result;
}

console.log(intersection2([1, 2, 3], [2, 3, 4]));
