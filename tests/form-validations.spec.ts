import {test, expect} from "@playwright/test";
import { formLocators } from "../pages/form_locators";

let form: formLocators;
test.beforeEach(async({page})=>{
    form = new formLocators(page)
    await form.page.goto("https://www.qaplayground.com/practice/forms")
})
const data={
            fname: 'Peter',
            lname: 'Sutherland',
            email: 'peter.sutherland@gmail.com',
            phone: "5555555555",
            dob: '2000-01-20',
            gender: 'female',
            country: 'USA',
            city: 'Columbus',
            about: 'I am QA',
            interest: ['Playwright'],
            password: '123456',
            confirmPassword: '123456',
        }
test.describe("Form Validations",()=>{
    test("Fill all fields with valid data and submit successfully",async()=>{
        await form.fillDetails(data)
        await form.terms.click()
        await form.submit.click()
        await expect(form.page.getByText('Form Submitted Successfully!')).toBeVisible()

    })

    test("Verify required field errors appear on empty submit",async()=>{
        await expect(form.submit).toBeVisible()
        await form.submit.click()
        await expect(form.page.getByTestId('error-first-name')).toHaveText('First name is required.')
        await expect(form.page.getByTestId('error-last-name')).toHaveText('Last name is required.')
        await expect(form.page.getByTestId('error-email')).toHaveText('Email is required.')
        await expect(form.page.getByTestId('error-phone')).toHaveText('Phone number is required.')
        await expect(form.page.getByTestId('error-dob')).toHaveText('Date of birth is required.')
        await expect(form.page.getByTestId('error-gender')).toHaveText('Please select a gender.')
        await expect(form.page.getByTestId('error-country')).toHaveText('Please select a country.')
        await expect(form.page.getByTestId('error-city')).toHaveText('City is required.')
        await expect(form.page.getByTestId('error-password')).toHaveText('Password is required.')
        await expect(form.page.getByTestId('error-confirm-password')).toHaveText('Please confirm your password.')
        await expect(form.page.getByTestId('error-terms')).toHaveText('You must accept the terms.')
    })

    test("Verify invalid email format shows validation error",async()=>{
        await expect(form.email).toBeVisible()
        await form.email.fill('test')
        await form.submit.click()
        await expect(form.page.getByTestId('error-email')).toHaveText('Enter a valid email address.')
    })

    test("Verify invalid phone number format shows error",async()=>{
        await expect(form.phone).toBeVisible()
        await form.phone.fill('55555')
        await form.submit.click()
        await expect(form.page.getByTestId('error-phone')).toHaveText('Enter a valid 10-digit phone number.')
    })

    test("Verify password minimum length validation",async()=>{
        await expect(form.password).toBeVisible()
        await form.password.fill('123')
        await form.submit.click()
        await expect(form.page.getByTestId('error-password')).toHaveText('Password must be at least 6 characters.')
    })

    test("Verify password mismatch shows confirm password error",async()=>{
        await expect(form.confirmPassword).toBeVisible()
        await form.password.fill('123456')
        await form.confirmPassword.fill('1234')
        await form.submit.click()
        await expect(form.page.getByTestId('error-confirm-password')).toHaveText('Passwords do not match.')
    })

    test("Verify success message displays submitted name",async()=>{
        await form.fillDetails(data)
        await form.terms.click()
        await form.submit.click()
        const fullName:string = data.fname+' '+data.lname
        await expect(form.page.getByTestId('submitted-name')).toHaveText(fullName)
    })

    test("Verify reset button clears all fields",async()=>{
        await form.fillDetails(data)
        await form.reset.click()
        await expect(form.firstName).toHaveValue('')
        await expect(form.lastName).toHaveValue('')
        await expect(form.email).toHaveValue('')
        await expect(form.phone).toHaveValue('')
        await expect(form.dob).toHaveValue('')
        await expect(form.page.getByTestId('radio-gender-male')).not.toBeChecked()
        await expect(form.page.getByTestId('radio-gender-female')).not.toBeChecked()
        await expect(form.page.getByTestId('radio-gender-other')).not.toBeChecked()
        await expect(form.city).toHaveValue('')
        await expect(form.about).toHaveValue('')
        await expect(form.password).toHaveValue('')
        await expect(form.confirmPassword).toHaveValue('')
        await expect(form.page.getByTestId('select-country')).toContainText('Select country')
        await expect(form.terms).not.toBeChecked()
        await expect(form.seleniumCheckbox).not.toBeChecked()
        await expect(form.playwrightCheckbox).not.toBeChecked()
        await expect(form.cypressCheckbox).not.toBeChecked()
        await expect(form.appiumCheckbox).not.toBeChecked()
        await expect(form.jestCheckbox).not.toBeChecked()
    })







    
})

