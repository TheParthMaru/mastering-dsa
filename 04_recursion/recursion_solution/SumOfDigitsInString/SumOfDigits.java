package SumOfDigitsInString;

public class SumOfDigits {
    public static int solution1(String str, int idx) {
        if (idx == str.length() - 1) {
            // Unnecessary extra conversion
            // Integer.parseInt(str.valueOf(str.charAt(idx)))

            // Two good ways to do this
            // 1. Character.getNumericValue(str.charAt(idx))
            // 2. str.charAt(idx) - '0' -> Straight forward conversion to int

            return str.charAt(idx) - '0';
        }

        return str.charAt(idx) - '0' + solution1(str, idx + 1);
    }
}
