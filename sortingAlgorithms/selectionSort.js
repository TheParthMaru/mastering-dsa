function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = getMinIndex(arr, i);
		if (minIndex != i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
}

function getMinIndex(arr, i) {
	let smallest = Infinity;
	let minIndex;
	while (i < arr.length) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			minIndex = i;
		}
		i++;
	}
	return minIndex;
}

let arr = [5, 4, 3, 2, 3, 1];
selectionSort(arr);
console.log(arr);
