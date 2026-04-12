import {test, expect, Locator} from '@playwright/test'
import { Alert } from '../pages/alerts_locators'

let alert: Alert;
test.beforeEach(async({page})=>{
    alert = new Alert(page)
    await page.goto("https://www.qaplayground.com/practice/alerts-dialogs")
})

test.describe("Alert Verifications",async()=>{

    test("Accept a simple browser alert and verify it closes",async({})=>{
        await expect(alert.simpleAlert).toBeVisible()
        alert.page.on('dialog', (dialog)=>{
            dialog.accept();
        })
        await alert.simpleAlert.click()
    })

    test("Get text from a simple browser alert before accepting",async()=>{
        await expect(alert.simpleAlert).toBeVisible()
        alert.page.on('dialog',async(dialog)=>{
            console.log(dialog.message())
            const msg:string = dialog.message()
             expect(msg).toEqual('Welcome to QA PlayGround!')
            dialog.accept();
        })
        await alert.simpleAlert.click()
    })

    test("Accept a confirm dialog and verify accepted state",async()=>{
        await expect(alert.confirmAlert).toBeVisible()
        alert.page.on('dialog',(dialog)=>{
            expect(dialog.type()).toEqual('confirm')
            console.log( dialog.message())
            dialog.accept();
        })

        await alert.confirmAlert.click()
        await expect(alert.resultConfirm).toHaveText('Result: Accepted',{ignoreCase:true})
    })

    test("Dismiss a confirm dialog and verify dismissed state",async()=>{
        await expect(alert.confirmAlert).toBeVisible()
        alert.page.on('dialog',(dialog)=>{
            dialog.dismiss();
        })
        await alert.confirmAlert.click()
        await expect(alert.resultConfirm).toHaveText('Result: Dismissed',{ignoreCase:true})
    })

    test("Enter text in a prompt dialog and accept it",async()=>{
        await expect(alert.promptAlert).toBeVisible()
        alert.page.on('dialog',(dialog)=>{
            dialog.accept('John Doe');
        })
        await alert.promptAlert.click()
        await expect(alert.resultPrompt).toHaveText('Your name is — John Doe',{ignoreCase:true})
    })

    test("Dismiss a prompt dialog and verify no input is captured",async()=>{
        await expect(alert.promptAlert).toBeVisible()
        alert.page.on('dialog',(dialog)=>{
            dialog.dismiss();
        })
        await alert.promptAlert.click()
        await expect(alert.resultPrompt).toBeHidden()
    })

    test("Verify toast notification appears after triggering",async()=>{
        await expect(alert.toastAlert).toBeVisible()
        await alert.toastAlert.click()
        await expect(alert.page.getByText('This is simple toast.')).toBeVisible()
    })

    test("Close a modal/sweet alert using the Cancel button",async()=>{
        await expect(alert.modalAlert).toBeVisible()
        await alert.modalAlert.click()
        const dialog:Locator= alert.page.getByRole('alertdialog')
        await expect(dialog).toContainText('Modern Alert — some people call this a “sweet alert” as well.')
    })

    test("Close an advanced dialog using the Close button",async()=>{
        await expect(alert.shareAlert).toBeVisible()
        await alert.shareAlert.click()
        await expect(alert.page.getByRole("dialog")).toBeVisible()
        await expect(alert.shareInput).toHaveValue('https://www.qaplayground.com/practice/alerts-dialogs')
        await alert.shareClose.click()
    })

})