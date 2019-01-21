package Steps;

import cucumber.api.DataTable;
import cucumber.api.java8.En;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class MyStepdefs implements En {
    
    private WebDriver driver;

    public MyStepdefs(Base base) {
        this.driver=base.getChromeBrowser();

        driver.manage().timeouts().pageLoadTimeout(60,TimeUnit.SECONDS);
        driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);


        Given("^I Navigate to the \"([^\"]*)\" (?:application|portal)$", (String application) -> {
            driver.get(application);
            System.out.println("Navigate to the application");
        });

        And("^I enter the username and password$", this::accept);

        And("^I clicked on submit button$", () -> {
            
            driver.findElement(By.name("UserName")).sendKeys("Rajesh");
            driver.findElement(By.name("Password")).sendKeys("varma");
            driver.findElement(By.name("Login")).submit();
            System.out.println("I clicked on submit button");
        });

        Then("^I verify the user logged (into|from) the application$", (String InOrFrom) -> {
            switch(InOrFrom){
                case "into":
                    Assert.assertTrue(driver.getTitle().contains("Execute Automation"));
                    System.out.println("I successfully logged into the application");
                    break;
                case "from":
                    driver.findElement(By.xpath("(//*[@id='cssmenu']/ul/li/a)[1]")).click();
                    System.out.println("I successfully logged out from the application");
                    driver.quit();
                    break;
                default:
                    System.out.println("User unable to perfome any action on the application");
            }
        });

    }

    private void accept(DataTable table) {

        List<User> user = table.asList(User.class);

        List<String> emailItems = user.stream().map(s -> s.email.toString().toString()).collect(Collectors.toList());
        for (String str : emailItems) {
            System.out.println(str.toString());
        }

        for (int i = 0; i < user.size(); i++) {
            String username = user.get(i).username;
            String password = user.get(i).password;
            System.out.println("The user name is " + username + " and the password is " + password);
        }
        System.out.println("I entered the User name Password");
    }


    public class User {

        String username;
        String password;
        String email;

        public User(User user) {
            this.username = user.username;
            this.password = user.password;
            this.email = user.email;
        }

    }


}

