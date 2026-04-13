import {test, expect} from '@playwright/test'
import { datepicker } from '../pages/datepicker_locators'

let datePicker: datepicker
test.beforeEach(({page})=>{
    datePicker = new datepicker(page)
    datePicker.page.goto("https://www.qaplayground.com/practice/date-picker")
})

test.describe("Date Picker Tests",async()=>{
    test("Fill today's date in the date input and verify the value",async()=>{
        await datePicker.setDatePicker('todaydate','2026-04-13')
        const date = await datePicker.getDate('todaydate')
        expect(date).toEqual('2026-04-13')
    })

})
