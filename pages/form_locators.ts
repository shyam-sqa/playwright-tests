import {test, Locator, Page} from '@playwright/test'

export class formLocators{
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly dob: Locator;
    readonly country: Locator;
    readonly city: Locator;
    readonly about: Locator;
    readonly interests: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly terms: Locator;
    readonly submit: Locator;
    readonly reset: Locator;
    readonly seleniumCheckbox: Locator
    readonly playwrightCheckbox: Locator
    readonly cypressCheckbox: Locator
    readonly appiumCheckbox: Locator
    readonly jestCheckbox: Locator
    readonly fillAgain: Locator


    constructor(page:Page){
        this.page = page
        this.firstName = page.getByLabel('First Name ')
        this.lastName = page.getByLabel('Last Name ')
        this.email  = page.getByTestId('input-email')
        this.phone = page.getByTestId('input-phone')
        this.dob = page.getByTestId('input-dob')
        this.country = page.getByTestId('select-country')
        this.city = page.getByLabel('City ')
        this.about = page.getByTestId('textarea-bio')
        this.interests = page.getByTestId('interests-group')
        this.password = page.getByTestId('input-password')
        this.confirmPassword = page.getByTestId('input-confirm-password')
        this.terms = page.getByTestId('checkbox-terms')
        this.submit = page.getByTestId('submit-form-btn')
        this.reset = page.getByTestId('reset-form-btn')
        this.seleniumCheckbox = page.getByTestId('checkbox-interest-selenium')
        this.playwrightCheckbox = page.getByTestId('checkbox-interest-playwright')
        this.cypressCheckbox = page.getByTestId('checkbox-interest-cypress')
        this.appiumCheckbox = page.getByTestId('checkbox-interest-appium')
        this.jestCheckbox = page.getByTestId('checkbox-interest-jest')
        this.fillAgain = page.getByTestId('reset-form-btn')
    }

    

    async fillDetails(data:any){
        const actions: Record<string, Function> = {
        fname: () => this.firstName.fill(data.fname),
        lname: () => this.lastName.fill(data.lname),
        email: () => this.email.fill(data.email),
        phone: () => this.phone.fill(data.phone),
        dob: () => this.dob.fill(data.dob),
        city: () => this.city.fill(data.city),
        about: () => this.about.fill(data.about),
        password: () => this.password.fill(data.password),
        confirmPassword: () => this.confirmPassword.fill(data.confirmPassword),
        }

        for (const key in actions) {
            if (data[key]) {
                await actions[key]();
            }
        }
        if (data.gender) {
            await this.page.getByTestId(`radio-gender-${data.gender.toLowerCase()}`).check();
        }

        if (data.country) {
            await this.country.click();
            await this.page.getByRole('option', { name: data.country }).click();
        }

        if (data.interest?.length) {
            for (const item of data.interest) {
                await this.interests.getByLabel(item).check();
            }
        }
    }
}
