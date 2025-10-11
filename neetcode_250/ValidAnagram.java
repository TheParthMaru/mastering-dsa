package neetcode_250;

public class ValidAnagram {

    /*
     * Optimal approach: Using HashTables
     * Time complexity: O(n) + O(m)
     * Space complexity: O(1) because we only have 26 alphabets.
     */
    static boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;

        // Since we have 26 alphabets, we create an empty array of size 26
        int[] chars = new int[26];

        for (int i = 0; i < s.length(); i++) {
            chars[s.charAt(i) - 'a']++;
            chars[t.charAt(i) - 'a']--;
        }

        for (int c : chars) {
            if (c != 0)
                return false;
        }

        return true;
    }
}
