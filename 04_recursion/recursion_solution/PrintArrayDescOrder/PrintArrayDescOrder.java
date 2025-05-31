package PrintArrayDescOrder;

public class PrintArrayDescOrder {
    public void print(int[] arr, int idx) {
        if (idx < 0) {
            System.out.println();
            return;
        }

        System.out.print(arr[idx] + " ");
        print(arr, idx - 1);
    }
}
