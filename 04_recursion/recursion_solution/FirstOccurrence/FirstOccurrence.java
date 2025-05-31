package FirstOccurrence;

public class FirstOccurrence {
    public static int foo(int[] arr, int idx, int element) {
        if (idx == arr.length) {
            return -1;
        }

        if (arr[idx] == element) {
            return idx;
        }

        return foo(arr, idx + 1, element);
    }
}
