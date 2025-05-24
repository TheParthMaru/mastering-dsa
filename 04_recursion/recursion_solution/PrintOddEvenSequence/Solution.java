package PrintOddEvenSequence;

public class Solution {
    public static void printSequence(int num) {
		printOddSequence(num);
		printEvenSequence(2, num);
	}	

	public static void printOddSequence(int num) {
		if(num <= 0) {
			return;
		}

        // Doing this to skip the uneccessary checking of even numbers
		if(num % 2 == 0) {
			printOddSequence(num - 1);
		} else {
			System.out.print(num + " ");
			printOddSequence(num - 2);
		}
	}

	public static void printEvenSequence(int num, int limit) {
		if(num > limit) {
			return;
		}

        // Doing this to skip the uneccessary checking of odd numbers
		if(num % 2 != 0) {
			printEvenSequence(num+1, limit);
		} else {
			System.out.print(num + " ");
			printEvenSequence(num+1, limit);
		}
	}

}
