function firstMissingPositive(nums) {
    // Check if 1 is present
    let containsOne = false;
    for (let num of nums) {
        if (num === 1) {
            containsOne = true;
            break;
        }
    }

    // If 1 is not present, then that's the smallest missing +ve
    if (!containsOne) return 1;

    let n = nums.length;

    // Clean the array by replacing -ve and > n values with 1
    // We are replacing with 1 because that is the smallest +ve and if the array didn't contain it,
    // we would have returned 1 earlier
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 1;
        }
    }

    // Marking visited indexes as -ve
    for (let i = 0; i < n; i++) {
        let indexToMark = Math.abs(nums[i]) - 1;
        nums[indexToMark] = -Math.abs(nums[indexToMark]);
    }

    // Finding the first +ve number's index
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
}
