import{test, expect} from "@playwright/test";
import { title } from "node:process";

test("test1",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    let title:string = await page.title();
    console.log("title is",title)
    
    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.pause()

    expect(page.url()).toBe("https://testautomationpractice.blogspot.com/")

})