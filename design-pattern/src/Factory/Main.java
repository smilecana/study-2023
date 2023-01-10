package Factory;

import Factory.framework.*;
import Factory.idcard.*;

public class Main {
    public static void main(String[] args) {
        Factory factory = new IDCardFactory();
        Product card1 = factory.create("HANA");
        Product card2 = factory.create("NANA");
        Product card3 = factory.create("LALA");
        card1.use();
        card2.use();
        card3.use();
    }
}
