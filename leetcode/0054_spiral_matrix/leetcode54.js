/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	if (matrix.length === 0) return []; // Handle empty matrix case
	let m = matrix.length; // No. of rows
	let n = matrix[0].length; // No. of cols
	let result = [];
	let left = 0,
		right = n - 1,
		top = 0,
		bottom = m - 1;

	while (left <= right && top <= bottom) {
		// Traverse top row
		for (let col = left; col <= right; col++) {
			result.push(matrix[top][col]);
		}
		top++;

		// Traverse right column
		for (let row = top; row <= bottom; row++) {
			result.push(matrix[row][right]);
		}
		right--;

		// Check if there's still a valid row to traverse
		if (top <= bottom) {
			// Traverse bottom row
			for (let col = right; col >= left; col--) {
				result.push(matrix[bottom][col]);
			}
			bottom--;
		}

		// Check if there's still a valid column to traverse
		if (left <= right) {
			// Traverse left column
			for (let row = bottom; row >= top; row--) {
				result.push(matrix[row][left]);
			}
			left++;
		}
	}

	return result;
};
