public class Leetcode509 {
    /**
     * Approach 1: Using simple recursion
     * TC: O(2^n)
     * SC: O(1)
     * 
     * The constraint on leetcode was for 0 <= n <= 30.
     * If n was something like 50 we would have received TLE.
     * In that case, recursion with DP (memoization) can be used (only if you want to solve it recursively)
     */

    public int fib(int n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;

        return fib(n - 1) + fib(n - 2);
    }

    /**
     * Approach 2: Iterative approach
     * 
     * TC: O(N)
     * SC: O(1)
     */
    public int fibo2(int n) {
        if(n == 0) return 0;
        if(n == 1) return 1;

        int a = 0, b = 1;

        for(int i = 2; i <= n; i++) {
            int next = a + b;
            a = b;
            b = next;
        }

        return b;
    }
}
