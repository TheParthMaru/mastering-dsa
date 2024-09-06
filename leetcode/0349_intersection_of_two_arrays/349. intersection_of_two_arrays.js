/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
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
