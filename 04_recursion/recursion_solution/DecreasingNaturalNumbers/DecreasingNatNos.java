package DecreasingNaturalNumbers;

public class DecreasingNatNos {
    public static void decreasingNaturalNumbers(int num) {
        System.out.print(num + " ");
        if (num == 1) {
            return;
        }

        decreasingNaturalNumbers(num - 1);
    }
}
