/**
 * Bruteforce approach not keeping readability and not using slice()
 * @param {*} arr
 * @returns
 */

function mergeSort1(arr) {
	// Base case: Array with 0 or 1 element is already sorted.
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = [];
	const right = [];

	for (let i = 0; i < mid; i++) {
		left.push(arr[i]);
	}

	for (let i = mid; i < arr.length; i++) {
		right.push(arr[i]);
	}

	return merge(mergeSort1(left), mergeSort1(right));
}

/**
 * Improving readability by using slice() but it may affect large sized arrays
 * @param {*} arr
 */

function mergeSort2(arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = mergeSort2(arr.slice(0, mid));
	const right = mergeSort2(arr.slice(mid));

	return merge(left, right);
}

/**
 * Merge two sorted arrays
 */

function merge(left, right) {
	const merged = [];
	let i = 0,
		j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			merged.push(left[i]);
			i++;
		} else {
			merged.push(right[j]);
			j++;
		}
	}

	// Check if any elements are still present in left[]
	while (i < left.length) {
		merged.push(left[i]);
		i++;
	}

	// Check if any elements are still present in right[]
	while (j < right.length) {
		merged.push(right[j]);
		j++;
	}

	return merged;
}

let arr = [9, 1, 6, -1, 3, 18, 2, 14, -2];
let sortedArr = mergeSort2(arr);
console.log(sortedArr);
