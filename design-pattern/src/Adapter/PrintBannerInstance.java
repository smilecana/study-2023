package Adapter;

public class PrintBannerInstance extends PrintInstance{
    private Banner banner;
    public PrintBannerInstance (String string) {
        this.banner = new Banner (string);
    }

    @Override
    public void printWeak() {
        banner.showWithParen();
    }

    @Override
    public void printString() {
        banner.showWithAster();
    }
}
