import java.util.ArrayList;

public class AddTwoArrays {
    public static int[] addTwoArrays(int[] arr1, int[] arr2) {
        ArrayList<Integer> result = new ArrayList<>();

        int i = arr1.length - 1;
        int j = arr2.length - 1;
        int carry = 0;

        while (i >= 0 || j >= 0) {
            int sum = 0;
            if (i >= 0) {
                sum += arr1[i];
                i--;
            }

            if (j >= 0) {
                sum += arr2[j];
                j--;
            }

            sum += carry;
            int element = (sum % 10);
            carry = sum / 10;
            result.add(0, element);
        }

        if (carry != 0) {
            result.add(0, carry);
        }

        int[] output = new int[result.size()];
        int index = 0;
        for (Integer element : result) {
            output[index++] = element;
        }

        return output;
    }
}
