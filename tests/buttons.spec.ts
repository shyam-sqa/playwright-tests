import {test, expect} from '@playwright/test'
import { inputButtons } from '../pages/button_locators'
let btn:inputButtons;
test.beforeEach(async({page})=>{
    btn = new inputButtons(page)
    await page.goto("https://www.qaplayground.com/practice/buttons")
    waitUntil: 'networkidle'
})

test.describe("Button Tests",async()=>{

    test("Verify button is clickable and triggers action",async()=>{
        await expect(btn.homeButton).toBeVisible()
        await btn.homeButton.click()
        await expect(btn.page).toHaveURL(/qaplayground/)
    })

    test("Get Button X & Y Coordinates",async()=>{
        await expect(btn.findLocation).toBeVisible()
        await btn.findLocation.waitFor({ state: 'visible' })
        const box = await btn.findLocation.boundingBox()
        console.log(`X:${box?.x},Y:${box?.y}`)
    })

    test("Get Button Color",async()=>{
        await expect(btn.findColor).toBeVisible()
        const bgColor:string = await btn.findColor.evaluate(el=>{
            return window.getComputedStyle(el).backgroundColor;
        })
        console.log("Button background color:",bgColor)
        expect(bgColor).toBe('rgb(147, 197, 253)')
    })

    test("Get Button Height & Width",async()=>{
        await expect(btn.sizeButton).toBeVisible()
        await btn.sizeButton.waitFor({state:'visible'})
        const box = await btn.sizeButton.boundingBox()
        console.log(`Width:${box?.width},Height:${box?.height}`)
    })

    test.fail("Disabled Button",async()=>{
        await btn.disabledButton.click()
    })

    test("Click and Hold for 1.5 sec",async()=>{
        await expect(btn.holdButton).toBeVisible()
        await btn.holdButton.hover()
        await btn.page.mouse.down()
        await btn.page.waitForTimeout(2000)
        await btn.page.mouse.up()
        await expect(btn.holdButton).toHaveText('Hold Complete!')
    })

    test("Double Click Button",async()=>{
        await expect(btn.dblClick).toBeVisible()
        await btn.dblClick.dblclick()
        await expect(btn.actionResult).toHaveText('You Double-clicked on button!')
    })

    test("Right Click Button",async()=>{
        await expect(btn.rightClick).toBeVisible()
        await btn.rightClick.click({button:'right'})
        await btn.page.waitForTimeout(1000)
        await expect(btn.actionResult).toHaveText('You Right-clicked on button!')
    })






})

