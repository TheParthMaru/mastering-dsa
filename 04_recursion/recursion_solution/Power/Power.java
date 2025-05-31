package Power;

public class Power {
    public static int findPower(int a, int b) {
        if (b == 0) {
            return 1;
        }

        return a * findPower(a, b - 1);
    }
}
