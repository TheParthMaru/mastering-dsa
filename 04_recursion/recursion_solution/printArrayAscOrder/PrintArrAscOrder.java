package printArrayAscOrder;

public class PrintArrAscOrder {
    public void print(int[] arr, int idx) {
        if (idx == arr.length) {
            System.out.println();
            return;
        }

        System.out.print(arr[idx] + " ");
        print(arr, idx + 1);
    }
}
