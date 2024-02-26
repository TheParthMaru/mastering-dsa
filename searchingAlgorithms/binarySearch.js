/**
 * TC: O(logn)
 * SC: O(1)
 */

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 22));
