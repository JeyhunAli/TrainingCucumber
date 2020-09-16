package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/jey/eclipse-workspace/TraningCucumber/Feature", //the path of the feature files
		glue="stepDefinition", //the path of the step definition files
		//format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
		monochrome = true,  //display the console output in a proper readable format
		strict = false, //it will check if any step is not defined in step definition file
		plugin= {"pretty", "html:target/HtmlReports", 
				"junit:target/JUnitReports",
				"json:target/JSONReports"},
		dryRun = false, //to check the mapping is proper between feature file and step def file
		//tags = "@SmokeTest1"  //its for runner understand what scenario or what feature to run 
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}	
		//tags = "@SmokeTest2"
	    tags = "@SmokeTest3"
		)


public class MyRunner  {

}



//regular expression for passing username and pasword   When ("^user enters(.*) and (.*)$")
// and pass String usernmae and password paramaters