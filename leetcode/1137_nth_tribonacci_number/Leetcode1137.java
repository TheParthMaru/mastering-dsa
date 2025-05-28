public class Leetcode1137 {

    /*
     * Approach 1: Straightforward recursion (results in TLE)
     * The problem with this approach is that it is very inefficient.
     * We could improve it with dynamic programming approach
     */

    public static int tribonacci1(int n) {
        // Base cases
        if (n == 0)
            return 0;

        if (n == 1 || n == 2)
            return 1;

        return tribonacci1(n - 1) + tribonacci1(n - 2) + tribonacci1(n - 3);
    }
}
