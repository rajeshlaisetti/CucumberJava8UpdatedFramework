package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
         strict = true
        ,features = "src/test/java/Feature"
        ,glue = "Steps"
        ,format = {"pretty", "html:target/site/cucumber-pretty"
                            , "json:target/cucumber.json"
                   }
        ,tags = {"@WorkInProgress"}
)

public class TestRunner {


}
