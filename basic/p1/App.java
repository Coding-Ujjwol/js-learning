public class App { 
    public static void main(String[] args) { 
        int a = 12; // Moved inside main
        while (a > 0) { 
            System.out.println("hello world"); 
            a--; // Decrement to avoid infinite loop
        } 
    } 
}
