package main.conversores;

public class Conversores {
    public static void decimalParaBinário(int decimal) {
        String binario = "";
        while (decimal > 0) {
            binario = decimal % 2 + binario;
            decimal = decimal / 2;
        }
        System.out.println("--Binario: " + binario);
    }
}
