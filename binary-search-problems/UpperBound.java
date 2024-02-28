/**
 * Problem: https://www.codingninjas.com/studio/problems/lower-bound_8165382?utm_source=youtube&utm_medium=affiliate&utm_campaign=codestudio_Striver_BinarySeries&leftPanelTabValue=PROBLEM
 */

public class Solution {
    public static int upperBound(int []arr, int x, int n){
        int low = 0, high = n-1, ans = n;
        while(low <= high) {
            int mid = low + (high - low) / 2;
            if(arr[mid] <= x) {
                low = mid + 1;
            } else {
                ans = mid;
                high = mid - 1;
            }
        }

        return ans;
    }
}
