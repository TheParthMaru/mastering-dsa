/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	let result = Array(matrix[0].length);
	for (let i = 0; i < matrix[0].length; i++) {
		let arr = Array(matrix.length);
		result[i] = arr;
	}

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			result[col][row] = matrix[row][col];
		}
	}

	return result;
};
