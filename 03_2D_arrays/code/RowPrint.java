public class RowPrint {
    public static void main(String[] args) {
        int[][] arr = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 }, { 13, 14, 15, 16 } };

        int totalRows = arr.length;
        int totalCols = arr[0].length;

        for (int row = 0; row < totalRows; row++) {
            for (int col = 0; col < totalCols; col++) {
                System.out.print(arr[row][col] + " ");
            }
        }
        System.out.println();
    }
}
