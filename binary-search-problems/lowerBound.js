/**
 * Problem: https://www.codingninjas.com/studio/problems/lower-bound_8165382?utm_source=youtube&utm_medium=affiliate&utm_campaign=codestudio_Striver_BinarySeries&leftPanelTabValue=PROBLEM
 *
 * Approach: Binary search
 * TC: O(logn)
 * SC: O(1)
 */

function lowerBound(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < x) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }

    return ans;
}
