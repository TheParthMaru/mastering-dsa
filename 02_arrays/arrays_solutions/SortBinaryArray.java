public class SortBinaryArray {
    public static void sort(int[] arr) {
        int i = 0;
        int j = arr.length - 1;

        while (i <= j) {
            if (arr[i] != 0) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j--;
            } else {
                i++;
            }
        }
    }
}