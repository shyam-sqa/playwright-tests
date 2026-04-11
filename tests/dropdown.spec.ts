import {test, expect, Locator} from '@playwright/test'
import { dropdown } from '../pages/dropdown_locators'

let option:dropdown;

test.beforeEach(async({page})=>{
    option = new dropdown(page)
    await option.page.goto("https://www.qaplayground.com/practice/dropdowns")
})
test.describe("Dropdowns Validations",()=>{

    test("Select 'Apple' from fruit dropdown by visible text",async()=>{
       await expect(option.selectFruit).toBeVisible()
       await expect(option.selectFruit).toContainText('Select Fruit')
       await option.selectFruit.click()
       await option.page.getByRole('option',{name: 'Apple'}).click()
       await expect(option.resultFruit).toContainText('Selected: Apple',{ignoreCase: true})
    })

    test("Verify selected value is displayed after selection",async()=>{
        await expect(option.selectCountry).toBeVisible()
        await option.selectCountry.click()
        await option.page.getByRole('option',{name: 'India'}).click()
        await expect(option.selectCountry).toContainText('India')
    })

    test("Get all available options from the programming language dropdown",async()=>{
        await expect(option.selectLanguage).toBeVisible()
        await option.selectLanguage.click()
        const list = await option.page.getByRole('option').allTextContents()
        console.log(list)
    })

    test("Select the last option from the programming language dropdown",async()=>{
        await expect(option.selectLanguage).toBeVisible()
        await option.selectLanguage.click()
        const list = await option.page.getByRole('option').allTextContents()
        await option.page.getByRole('option',{name:list[list.length-1]}).click()
    })

    test("Multi-select: select multiple superheroes",async()=>{
        await expect(option.multiSelect).toBeVisible()
        await option.multiSelect.selectOption(['Ant-Man','Aquaman'])
        await expect(option.resultHeroes).toContainText('ant-man, aquaman',{ignoreCase: true})
    })

    test("Verify a dropdown is enabled and interactable",async()=>{
        await expect(option.selectLanguage).toBeVisible()
        await option.selectLanguage.click()
        const list:Locator = option.page.getByRole('option')
        const count = await list.count();
        for (let i = 0; i < count; i++) {
            await expect(list.nth(i)).toBeEnabled();
        } 
    })

    test("Verify the total count of options in the country dropdown",async()=>{
        await expect(option.selectCountry).toBeVisible()
        await option.selectCountry.click()
        const list:Locator = option.page.getByRole('option')
        await expect(list).toHaveCount(4)
    })






})