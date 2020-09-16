package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Utilities.ElementUtility;
import Utilities.browserUtility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HubspotLogin {
	
	static 	browserUtility u;
	static	WebDriver driver;
	static	ElementUtility util;
	
	
	@Given("^I m entering hubspot url$")
	public void i_m_entering_hubspot_url() throws InterruptedException  {
		 u = new browserUtility();
		 driver = u.init_driver("chrome");
         util = new ElementUtility(driver);

		u.launchUrl("https://app.hubspot.com/login/");
		Thread.sleep(5000);
       String title = util.waitForContainsTitleToBePresent("HubSpot Login", 6);
System.out.println(title);
	}

	@When("^verifying signUp link is there$")
	public void verifying_signUp_link_is_there()  {
        util = new ElementUtility(driver);
By signUp = By.xpath("//i18n-string[contains(text(),'Sign up')]");
boolean displayed =util.isElementDisplayed(signUp, 3);
System.out.println("is element diplayed --- >" + displayed);
	}

	@And("^user enter \"([^\"]*)\", and \"([^\"]*)\"$")
	public void user_enter_and(String username, String password)  {
        util = new ElementUtility(driver);

     By name = By.id("username");
     By sword = By.id("password");
     util.doSendkeys(name, username);
     util.doSendkeys(sword, password);
     

	}

	@Then("^user click on the login button$")
	public void user_click_on_the_login_button()  {
        util = new ElementUtility(driver);
By loginbutton = By.id("loginBtn");
util.clickWhenReady(loginbutton, 3);

	}
	

}
