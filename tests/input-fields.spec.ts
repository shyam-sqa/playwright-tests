import {test, expect, Page, Locator} from "@playwright/test";
import {inputForm} from '../pages/input_locators'

let form: inputForm
test.beforeEach(async({page})=>{
    form = new inputForm(page)
    await page.goto("https://www.qaplayground.com/practice/input-fields")
})

test.describe("Input Fields",()=>{
    test("Verify successful movie name input:", async ({})=>{
        await expect(form.movieName).toBeVisible()
        await form.movieName.fill('Interstellar')
        await expect(form.movieName).toHaveValue('Interstellar')
})

    test("Verify input placeholder disappears on typing",async({})=>{
        await expect(form.movieName).toBeVisible()
        await expect(form.movieName).toHaveValue('')
        await form.movieName.fill('Interstellar')
        await expect(form.movieName).not.toHaveValue('')
    })

    test("Verify keyboard tab triggers focus change after append",async({})=>{
        await expect(form.apendTxt).toBeVisible()
        await expect(form.apendTxt).toHaveValue('I am good')
        await form.apendTxt.click()
        await form.apendTxt.press('End')
        await form.apendTxt.pressSequentially(' Hey, Good Morning!')
        await expect(form.apendTxt).not.toHaveValue('I am good Hey, Good Morning!')
        await form.page.keyboard.press('Tab')
        await expect(form.txtPresent).toBeFocused()
    })

    test("Verify text present inside input field matches expected value",async()=>{
        await expect(form.txtPresent).toBeVisible()
        await expect(form.txtPresent).toHaveValue('QA PlayGround')
    })

    test("Verify getAttribute returns the correct input value",async()=>{
        await expect(form.txtPresent).toBeVisible()
        await expect(form.txtPresent).toHaveAttribute('value','QA PlayGround')
    })

    test("Verify input field text can be cleared successfully",async()=>{   
        await expect(form.clearText).toBeVisible()
        await expect(form.clearText).toHaveValue('QA PlayGround Clear Me')
        await form.clearText.clear()
        await expect(form.clearText).toHaveValue('')
    })

    test("Verify disabled input field cannot be edited by user",async()=>{
        await expect(form.disableText).toBeVisible()
        await expect(form.disableText).toBeDisabled()
        await expect(form.disableText).toHaveAttribute('disabled')
        
    })

    test("Verify getAttribute returns correct readonly attribute value",async()=>{
        await expect(form.readonlyText).toBeVisible()
        //await expect(form.readonlyText).toBeDisabled()
        await expect(form.readonlyText).toHaveAttribute('readonly')
    })
})

