package MoveXToEnd;

public class MoveXToEnd {
    public static String solution(String str, int idx) {
        if (idx == str.length()) {
            return "";
        }

        if (str.charAt(idx) != 'x') {
            return str.charAt(idx) + solution(str, idx + 1);
        } else {
            return solution(str, idx + 1) + "x";
        }
    }
}
