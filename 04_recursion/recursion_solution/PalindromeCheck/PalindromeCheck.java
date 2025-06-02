package PalindromeCheck;

public class PalindromeCheck {
    public static boolean checkPalindrome(String str, int start, int end) {
        if (start >= end) {
            return true;
        }

        boolean check = str.charAt(start) == str.charAt(end);

        return check && checkPalindrome(str, start + 1, end - 1);
    }
}
