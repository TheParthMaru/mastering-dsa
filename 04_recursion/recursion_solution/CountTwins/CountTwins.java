package CountTwins;

public class CountTwins {
    public static int solution(String str, int idx, int count) {
        // Base case
        if (idx == str.length() - 2) {
            return count;
        }

        if (str.charAt(idx) == str.charAt(idx + 2)) {
            count += 1;
        }
        count = solution(str, idx + 1, count);
        return count;
    }
}
