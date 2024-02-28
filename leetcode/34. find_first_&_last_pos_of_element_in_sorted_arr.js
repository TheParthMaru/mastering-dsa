function lowerBound(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < x) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }

    return ans;
}

function upperBound(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] <= x) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }

    return ans;
}

var searchRange = function (nums, target) {
    let lB = lowerBound(nums, target);
    if (lB > nums.length || nums[lB] != target) {
        return [-1, -1];
    }

    let uB = upperBound(nums, target);
    return [lB, uB - 1];
};
