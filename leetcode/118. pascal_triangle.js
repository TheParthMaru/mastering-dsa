"use strict";

let result = [];
let n = 1;

for (let i = 0; i < n; i++) {
	let tempArr = [1];
	if (i == 0) {
		result.push([1]);
		continue;
	}
	if (i == 1) {
		result.push([1, 1]);
		continue;
	}

	for (let j = 0; j < i - 1; j++) {
		tempArr.push(result[i - 1][j] + result[i - 1][j + 1]);
	}
	tempArr.push(1);
	result.push(tempArr);
}

console.log(result);
