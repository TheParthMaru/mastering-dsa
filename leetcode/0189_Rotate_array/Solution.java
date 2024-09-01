public class Solution {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4 };
        int k = 3;

        rightRotate(arr, k);
        leftRotate(arr, k);
    }

    public static void reverse(int[] arr, int start, int end) {
        while (start <= end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }

    public static void rightRotate(int[] arr, int k) {
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
    }

    public static void leftRotate(int[] arr, int k) {
        int n = arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, n - k, n - 1);
        reverse(arr, 0, n - k - 1);
    }
}