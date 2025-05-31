package MaxElementOfArray;

public class MaxElementOfArr {
    public int findMaxElement(int[] arr, int idx) {
        if (idx == arr.length - 1) {
            return arr[idx];
        }

        return Math.max(arr[idx], findMaxElement(arr, idx + 1));
    }
}
