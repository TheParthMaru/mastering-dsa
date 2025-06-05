package PatternPrinting;

public class Pattern2 {
    public static void printPattern(int row, int col, int n) {
        if (row > n) {
            return;
        }

        if (col > row) {
            System.out.println();
            printPattern(row + 1, 1, n);
        } else {
            System.out.print("* ");
            printPattern(row, col + 1, n);
        }
    }
}
