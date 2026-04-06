import {test, expect, Locator} from "@playwright/test"

test("verify loc", async({page})=> {
    await page.goto("https://www.amazon.in/")
    await page.pause()

    //getByRole
    /*await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill("Samsung Mobiles")
    await page.getByRole('button', { name: 'Go', exact: true }).click()
    await page.pause()

    //getByAltText
    await page.getByAltText("ACs").click()
    await page.pause()*/

    //getByText
    await page.getByText("See personalized recommendations").scrollIntoViewIfNeeded()




})