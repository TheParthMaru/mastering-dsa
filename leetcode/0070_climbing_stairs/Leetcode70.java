public class Leetcode70 {

    /**
     * Approach 1: Simple recursion
     * This will result in TLE on leetcode, we need to optimize it.
     * 
     * TC: O(2^n)
     * SC: O(n)
     */

    public int solution1(int n) {
        // Base case
        if (n == 1 || n == 2)
            return n;

        return solution1(n - 1) + solution1(n - 2);
    }
}