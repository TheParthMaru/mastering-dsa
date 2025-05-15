function printOddDecreasing(n) {
	// Base case
	if (n < 1) return;

	// Check if it is odd
	if (n % 2 != 0) {
		console.log(n);
	}

	printOddDecreasing(n - 1);
}

function printEvenIncreasing(i, n) {
	// Base case
	if (i > n) {
		return;
	}

	// Check if i is even
	if (i % 2 == 0) {
		console.log(i);
	}

	printEvenIncreasing(i + 1, n);
}

function printSequence(num) {
	printOddDecreasing(num);
	printEvenIncreasing(2, num);
}

printSequence(6);
