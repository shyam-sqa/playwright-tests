import { test, Page, expect, Locator } from "@playwright/test";

export class inputForm{
    readonly page: Page
    readonly movieName : Locator;
    readonly apendTxt: Locator;
    readonly txtPresent: Locator;
    readonly clearText: Locator
    readonly disableText: Locator
    readonly readonlyText: Locator

    constructor(page:Page){
        this.page = page
        this.movieName = page.getByTestId('input-movie-name')
        this.apendTxt = page.getByLabel('Scenario 2: Append a text and press keyboard tab')
        this.txtPresent = page.getByTestId('input-verify-text')
        this.clearText= page.getByTestId('input-clear-text')
        this.disableText = page.getByTestId('input-disabled')
        this.readonlyText = page.getByTestId('input-readonly')
    }

}