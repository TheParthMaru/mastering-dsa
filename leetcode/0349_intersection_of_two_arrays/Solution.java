import java.util.*;

public class Solution {

    /**
     * Approach: Bruteforce
     * Time complexity: O(m x n)
     * Space complexity: O(n) or O(m)
     * 
     * @param num1
     * @param num2
     * @return
     */

    public int[] intersection1(int[] nums1, int[] nums2) {
        ArrayList<Integer> resultList = new ArrayList<>();
        /*
         * Looping over both the arrays to find the matching elements
         * Once matching element found, then add it to the resultList only if it
         * is not present.
         */

        for (int i = 0; i < nums1.length; i++) {
            for (int j = 0; j < nums2.length; j++) {
                if (nums1[i] == nums2[j]) {
                    if (!resultList.contains(nums1[i])) {
                        resultList.add(nums1[i]);
                    }
                    break;
                }
            }
        }

        int[] result = new int[resultList.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = resultList.get(i);
        }

        return result;
    }
}
