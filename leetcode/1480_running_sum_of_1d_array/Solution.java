/**
 * Approach: Efficient approach which is easy and straightforward
 * Time complexity: O(N)
 * Space complexity: O(1) we are saving space by updating the same array.
 */

class Solution {
    public int[] runningSum(int[] arr) {
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            arr[i] = sum;
        }
        return arr;
    }
}