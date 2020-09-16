package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Utilities.ElementUtility;
import Utilities.browserUtility;

public class S {
	
	

	public static void main(String[] args) {
		
		
		browserUtility u = new browserUtility();
		
		 WebDriver driver = u.init_driver("chrome");
		u.launchUrl("https://www.google.com/");

		ElementUtility util = new ElementUtility(driver);
		
	   
		
		String title = u.doGetTitle();
	System.out.println(title);
		
		By gmail = By.xpath("//a[contains(text(),'Gmail')]");
		//driver.findElement(By.xpath("//a[contains(text(),'Gmail')]")).click();
		
        util.clickWhenReady(gmail, 3);		
	}

}
