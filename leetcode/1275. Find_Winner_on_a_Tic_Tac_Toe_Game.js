/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
	const grid = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];

	// Helper function to check for a winner
	const checkWinner = (player) => {
		// Check rows and columns
		for (let i = 0; i < 3; i++) {
			if (
				grid[i][0] === player &&
				grid[i][1] === player &&
				grid[i][2] === player
			)
				return true; // row
			if (
				grid[0][i] === player &&
				grid[1][i] === player &&
				grid[2][i] === player
			)
				return true; // column
		}
		// Check diagonals
		if (
			grid[0][0] === player &&
			grid[1][1] === player &&
			grid[2][2] === player
		)
			return true; // diagonal
		if (
			grid[0][2] === player &&
			grid[1][1] === player &&
			grid[2][0] === player
		)
			return true; // anti-diagonal
		return false;
	};

	// Simulate the game
	for (let i = 0; i < moves.length; i++) {
		const [row, col] = moves[i];
		const player = i % 2 === 0 ? "A" : "B";
		grid[row][col] = player;
		if (checkWinner(player)) return player;
	}

	// Check if the game is pending or draw
	if (moves.length < 9) return "Pending";
	return "Draw";
};
