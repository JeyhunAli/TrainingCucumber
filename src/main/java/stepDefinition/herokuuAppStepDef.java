package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Utilities.ElementUtility;
import Utilities.browserUtility;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class herokuuAppStepDef {
	
static 	browserUtility u;
static	WebDriver driver;
static	ElementUtility util;
	
	
	@Given("^user navigated to herokuu app$")
	public void user_navigated_to_herokuu_app() throws Throwable {
		
		
		
		
		 u = new browserUtility();
		 driver = u.init_driver("chrome");
		u.launchUrl("https://the-internet.herokuapp.com/");
         util = new ElementUtility(driver);
		
	
		//System.out.println("inside stepdef");
		
	}

	@When("^user on main page check Title$")
	public void user_on_main_page_check_Title() throws Throwable {
		  util = new ElementUtility(driver);
			
	  String title =  util.waitFor_Full_TitleToBePresent("The Internet", 10);
		System.out.println(title);
		
		//System.out.println("inside stepdef");
	}

	@Then("^user clicks on A/B Testing$")
	public void user_clicks_on_A_B_Testing() throws Throwable {
		  util = new ElementUtility(driver);
			
		By abtest = By.xpath("//a[contains(text(),'A/B Testing')]");
		util.doClick(abtest);
		
		//System.out.println("inside stepdef");
	   
	}

	@Then("^user on A/B Testing page$")
	public void user_on_A_B_Testing_page() throws Throwable {
		  util = new ElementUtility(driver);
			
		By ABtestPAge = By.tagName("h3");
		boolean flag = util.isElementDisplayed(ABtestPAge, 3);
		System.out.println("exact element "+flag);
	   
	
		
		
		//System.out.println("inside stepdef");
	   
	}


	

}
