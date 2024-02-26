/**
 * This is a bruteforce searching algorithm that iterates over an array and checks if the element
 * at ith index equal to the target or not.
 *
 * TC: O(N)
 * SC: O(1)
 */

function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == target) return i;
	}

	return -1;
}
