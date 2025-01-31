var majorityElement = function (nums) {
	let count = 0;
	let candidate;
	for (let i = 0; i < nums.length; i++) {
		if (count === 0) {
			candidate = nums[i];
			count = 1;
		} else if (candidate === nums[i]) {
			count++;
		} else {
			count--;
		}
	}

	return candidate;
};
