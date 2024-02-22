let count = 0;

function merge(left, right, diff) {
	let result = [];
	let i = 0,
		j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] >= right[j] - diff) {
			count += left.length - i;
			j++;
		} else {
			i++;
		}
	}

	i = 0;
	j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i++]);
		} else {
			result.push(right[j++]);
		}
	}

	while (i < left.length) {
		result.push(left[i++]);
	}

	while (j < right.length) {
		result.push(right[j++]);
	}

	return result;
}

function mergeSort(arr, diff) {
	if (arr.length < 2) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid), diff);
	let right = mergeSort(arr.slice(mid), diff);

	return merge(left, right, diff);
}

const numberOfPairs = function (nums1, nums2, diff) {
	count = 0;
	let f = [];
	for (let k = 0; k < nums1.length; k++) {
		f.push(nums2[k] - nums1[k]);
	}

	f = mergeSort(f, diff);
	return count;
};

console.log(numberOfPairs([3, 2, 5], [2, 2, 1], 1));
