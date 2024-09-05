/**
 * Problem statement: Given an array, arr. The task is to find the largest
 * element in it.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

public class LargestElement {
    public static int largest(int[] arr) {
        int largest = arr[0];

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }

        return largest;
    }
}
