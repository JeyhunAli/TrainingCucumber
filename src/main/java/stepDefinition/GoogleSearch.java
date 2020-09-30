package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Utilities.ElementUtility;
import Utilities.browserUtility;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GoogleSearch {

	static browserUtility u;
	static WebDriver driver;
	static ElementUtility util;

	@Given("^user entered g(\\d+)gle url$")
	public void user_entered_g_gle_url(int arg1) throws Throwable {
		u = new browserUtility();
		driver = u.init_driver("chrome");
		u.launchUrl("https://www.google.com");
		util = new ElementUtility(driver);
		System.out.println("url entered into chrome browser");
	}

	@Given("^check google image is displayed or no$")
	public void check_google_image_is_displayed_or_no() throws Throwable {
		util = new ElementUtility(driver);
		By googleIMG = By.xpath("//img[@alt='Google']");
		boolean displayed = util.isElementDisplayed(googleIMG, 2000);
		if (displayed) {
			System.out.println("element found");
		} else {
			System.out.println("element is not there");
		}
	}

	@Then("^enter to the search box I L(\\d+)ve America$")
	public void enter_to_the_search_box_I_L_ve_America(int arg1) throws Throwable {
		util = new ElementUtility(driver);
		By searchButton = By.name("q");
		By click = By.name("btnK");
		util.isElementDisplayed_ThenSendKEYS(searchButton, 3, "I Love America");
		util.isElementDisplayed_ThenClick(click, 5);

	}

	@Then("^Click on the search button or hit enter$")
	public void click_on_the_search_button_or_hit_enter() throws Throwable {

	}

	@Then("^verify you I Love America\\. That's Why I Have to Tell the Truth About It \\.\\.\\. is in the page$")
	public void verify_you_I_Love_America_That_s_Why_I_Have_to_Tell_the_Truth_About_It_is_in_the_page()
			throws Throwable {
		util = new ElementUtility(driver);
		By america = By.xpath("//h3[text()=\"I Love America. That's Why I Have to Tell the Truth About It ...\"]");
		util.isElementDisplayed(america, 6);
	}

}
