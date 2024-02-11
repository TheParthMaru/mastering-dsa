function foo(heights, stone, n) {
	if (stone === n - 1) return 0;
	if (stone === n - 2) {
		return (
			Math.abs(heights[stone] - heights[stone + 1]) +
			foo(heights, stone + 1, n)
		);
	}

	let costOfStoneP1 =
		Math.abs(heights[stone] - heights[stone + 1]) +
		foo(heights, stone + 1, n);

	let costOfStoneP2 =
		Math.abs(heights[stone] - heights[stone + 2]) +
		foo(heights, stone + 2, n);

	return Math.min(costOfStoneP1, costOfStoneP2);
}
