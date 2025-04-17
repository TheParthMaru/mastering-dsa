
/**
 * Problem statement: Given an array of strings, print all the unique strings in
 * the array. A unique string is a string that appears only once.
 * Time complexity: O(N)
 * Space complexity: O(K)
 */

import java.util.HashMap;
import java.util.Map;

public class PrintUniqueStrings {
    public static void main(String[] args) {
        String[] str = { "cat", "dog", "fish", "dog", "bird", "cat", "lion" };
        Map<String, Integer> uniqueStrings = new HashMap<>();

        for (String currentString : str) {
            if (!uniqueStrings.containsKey(currentString)) {
                uniqueStrings.put(currentString, 1);
            } else {
                uniqueStrings.put(currentString, uniqueStrings.get(currentString) + 1);
            }
        }

        for (Map.Entry<String, Integer> entry : uniqueStrings.entrySet()) {
            String uniqueString = entry.getKey();
            Integer value = entry.getValue();

            if (value == 1) {
                System.out.print(uniqueString + " ");
            }
        }
        System.out.println();
    }
}