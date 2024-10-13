public class WavePrint {
	public static void printWave(int[][] arr) {
		for (int col = 0; col < arr[0].length; col++) {

			if (col % 2 == 0) {
				// Move down
				for (int row = 0; row < arr.length; row++) {
					System.out.print(arr[row][col] + " ");
				}
			} else {
				// Move up
				for (int row = arr.length - 1; row >= 0; row--) {
					System.out.print(arr[row][col] + " ");
				}
			}
		}
	}
}
