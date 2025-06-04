package ExtractParentheses;

public class ExtractParentheses {
    public static String solution(String str, int idx, boolean openingFound) {
        // Base case
        if (idx == str.length()) {
            return "";
        }

        // Check for ")"
        if (str.charAt(idx) == ')') {
            return solution(str, idx + 1, false);
        }

        // Check for "("
        if (str.charAt(idx) == '(') {
            return solution(str, idx + 1, true);
        }

        if (openingFound) {
            return str.charAt(idx) + solution(str, idx + 1, true);
        }

        return solution(str, idx + 1, false);
    }
}
