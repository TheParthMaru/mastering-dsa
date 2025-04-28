/**
 * Topics: Arrays, Two pointers
 * Difficulty: Medium
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
var nextPermutation = function (arr) {
	let n = arr.length;
	let breakpoint = -1;
	let idxBreakpoint = -1;

	// Finding the breakpoint
	for (let i = n - 1; i > 0; i--) {
		if (arr[i] > arr[i - 1]) {
			breakpoint = arr[i - 1];
			idxBreakpoint = i - 1;
			break;
		}
	}

	if (idxBreakpoint != -1) {
		for (let j = n - 1; j >= idxBreakpoint + 1; j--) {
			// Swapping with the next higher possible value
			if (arr[j] > breakpoint) {
				let temp = arr[j];
				arr[j] = arr[idxBreakpoint];
				arr[idxBreakpoint] = temp;
				break;
			}
		}
	}

	// Reverse from idxBreakpoint + 1 to n-1;
	reverse(arr, idxBreakpoint + 1, n - 1);
};

function reverse(arr, start, end) {
	while (start <= end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
}
