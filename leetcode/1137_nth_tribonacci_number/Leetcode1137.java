public class Leetcode1137 {

    /*
     * Approach 1: Straightforward recursion
     * The problem with this approach is that it is very inefficient.
     * We could improve it with dynamic programming approach
     */
    
    public static int tribonacci(int n) {
        // Base cases
        if(n == 0) return 0;

        if(n == 1 || n == 2) return 1;

        return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    }
}
