/**
 * Problem: Given an integer array of size n in range [0, n-2], every element is present once, but
 *          only one element is present twice. Find the repeating element.
 * Input: arr = [0, 1, 2, 2, 3, 4, 5, 6]
 * Output: 2
 *
 * Input: arr = [0, 1, 2, 3, 3, 4, 5, 6]
 * Output: 3
 *
 * Note: 1. There always exists a repeating element.
 *       2. There will only be 1 repeating element that is present only twice.
 *       3. Solution should be better than O(n).
 */

// Binary search approach
function findRepeatingElement(arr) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] != mid) {
            if (arr[mid] == arr[mid - 1]) {
                return arr[mid];
            }
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

console.log(findRepeatingElement([0, 1, 2, 3, 3, 4, 5, 6]));
