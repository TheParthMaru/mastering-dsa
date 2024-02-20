/**
 * Problem link: https://www.spoj.com/problems/INVCNT/
 *
 *
 * @param {*} arr
 * @returns
 */

function countInversionPairs(arr) {
	let count = 0;
	const mergeSort = (arr) => {
		if (arr.length < 2) {
			return arr;
		}

		let mid = Math.floor(arr.length / 2);
		let left = mergeSort(arr.slice(0, mid));
		let right = mergeSort(arr.slice(mid, arr.length));

		return merge(left, right);
	};

	const merge = (left, right) => {
		let merged = [];
		let i = 0,
			j = 0;

		while (i < left.length && j < right.length) {
			if (left[i] > right[j]) {
				count += left.length - i;
				merged.push(right[j]);
				j++;
			} else {
				merged.push(left[i]);
				i++;
			}
		}

		while (i < left.length) {
			merged.push(left[i++]);
		}

		while (j < right.length) {
			merged.push(right[j++]);
		}

		return merged;
	};

	mergeSort(arr);
	return count;
}
