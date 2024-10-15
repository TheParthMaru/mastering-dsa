public class MatrixMultiplication {
    public static void multiplyMatrix(int[][] matrix1, int[][] matrix2) {
        // Check if multiplication is possible
        if (matrix1[0].length != matrix2.length) {
            System.out.println("Matrix multiplication is not possible");
            return;
        }

        int[][] result = new int[matrix1.length][matrix2[0].length];

        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix2[0].length; j++) {
                int sum = 0;
                for (int k = 0; k < matrix1[0].length; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        }
    }
}
