import {test, expect, Locator} from "@playwright/test";

test("Verify locators:", async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/")
    
    //getByAltText
    let img:Locator= page.getByAltText("Picture for category Electronics")
    await expect(img).toBeVisible()

    //getByText
    await expect(page.getByText("Welcome to our store")).toBeVisible()

    //getByRole
    await page.getByRole("link", {name:"Register"}).click()

    //getByLabel
    await page.getByLabel("First name").fill("QA");
    await page.getByLabel("Last name").fill("Test");
    await page.getByLabel("Email").fill("test@gmail.com");


    //getByPlaceholder
    await page.getByPlaceholder("Search store").fill("lenovo")
    await page.getByRole("button",{name:"SEARCH"}).click()

    await page.goto("https://demo.nopcommerce.com/")
    await expect(page.getByTitle("Show products in category Electronics")).toHaveText("Electronics") 


    await page.goto("https://practicesoftwaretesting.com/")
    await page.getByTestId("nav-contact").click()
})