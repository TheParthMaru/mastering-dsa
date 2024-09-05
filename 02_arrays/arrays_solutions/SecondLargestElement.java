/**
 * Problem statement: Given an array arr, return the second largest distinct
 * element from an array. If the second largest element doesn't exist then
 * return -1.
 * 
 * Time complexity:
 * Space complexity:
 */
public class SecondLargestElement {
    public int findSecondLargest(int[] arr) {
        int largest = -1;
        int secondLargest = -1;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] != largest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}
