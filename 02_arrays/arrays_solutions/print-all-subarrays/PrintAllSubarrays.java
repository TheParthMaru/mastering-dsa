/*
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */

public class PrintAllSubarrays {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4 };

        for (int i = 0; i < arr.length; i++) {
            StringBuilder str = new StringBuilder();
            for (int j = i; j < arr.length; j++) {
                str = str.append(arr[j]).append(" ");
                System.out.println(str);
            }
        }
    }
}
