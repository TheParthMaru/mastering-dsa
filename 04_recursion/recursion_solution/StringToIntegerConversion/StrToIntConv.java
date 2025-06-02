package StringToIntegerConversion;

public class StrToIntConv {
    public static int solution(String str, int idx) {
        if (idx == str.length() - 1) {
            return (str.charAt(idx) - '0');
        }

        int currentDigit = str.charAt(idx) - '0';
        int power = (int) (Math.pow(10, str.length() - idx - 1));

        return (currentDigit * power) + solution(str, idx + 1);
    }
}
