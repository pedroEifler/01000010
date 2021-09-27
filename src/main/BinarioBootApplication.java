package main;

import main.conversores.Conversores;

import java.util.Scanner;

public class BinarioBootApplication {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("===Digite um valor em decimal===");
        int valorEmDecimal = sc.nextInt();

        System.out.println("");

        Conversores.decimalParaBinário(valorEmDecimal);
    }
}
