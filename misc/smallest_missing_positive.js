/**
 * Problem: Given a sorted array of non-negative distinct integers, find the smallest missing
 * non-negative element in it.
 *
 * Input: nums[] = [0,1,2,6,9,11,15]
 * Output: 3
 *
 * Input: nums[] = [0,1,2,3,4,5,6]
 * Output: 7
 */

/**
 * Bruteforce approach
 * TC: O(N)
 * SC: O(1)
 */

function findMissingElement(arr) {
    let expectedElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != expectedElement) {
            return expectedElement;
        }
        expectedElement++;
    }
}

/**
 * Using binary search
 * TC: O(logn)
 * SC: O(1)
 */

function findMissingElement(arr) {
    let answer = arr.length;
    let low = 0,
        high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == mid) {
            low = mid + 1;
        } else {
            answer = mid;
            high = mid - 1;
        }
    }

    return answer;
}
