package InsertStars;

public class InsertStars {
    public static String solution(String str, int i) {
        // You can use string builder but it will result in unnecessary object creation.

        if (i == str.length() - 1) {
            return str;
        }

        if (str.charAt(i) == str.charAt(i + 1)) {
            return solution(str.substring(0, i + 1) + "*" + str.substring(i + 1), i + 1);
        }

        return solution(str, i + 1);
    }
}
