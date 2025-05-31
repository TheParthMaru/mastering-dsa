package SumOfArrayElements;

public class SumOfArrElements {
    public int sumOfElements(int[] arr, int idx) {
        if (idx == arr.length - 1) {
            return arr[idx];
        }

        return arr[idx] + sumOfElements(arr, idx + 1);
    }
}
