package Steps;

import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class Hook {
    //WebDriver Inisilization
    WebDriver driver;
    @Before
    public WebDriver getChromeBrowser() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        return driver;
    }
}
