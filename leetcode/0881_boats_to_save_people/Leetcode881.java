import java.util.Arrays;

/**
 * Topics: Array, Two pointers, sorting, greedy
 * 
 */

public class Leetcode881 {

    /**
     * Approach: Optimal (My bruteforce was optimal)
     * Time complexity: O(nlogn)
     * Space complexity: O(1)
     */

    public int solution(int[] people, int limit) {
        Arrays.sort(people);

        int minBoats = 0;
        int i = 0, j = people.length - 1;

        while (i <= j) {
            if (people[i] + people[j] <= 1 || i == j) {
                i++;
                j--;
            } else {
                j--;
            }
            minBoats++;
        }

        return minBoats;
    }
}
