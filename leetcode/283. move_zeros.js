var moveZeroes = function (nums) {
	let currentZero = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			[nums[currentZero], nums[i]] = [nums[i], nums[currentZero]];

			currentZero++;
		}
	}

	return nums;
};
