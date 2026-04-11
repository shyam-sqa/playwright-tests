import { Locator, Page } from "@playwright/test";

export class dropdown{
    readonly page:Page;
    readonly selectFruit: Locator
    readonly selectCountry: Locator;
    readonly selectLanguage: Locator;
    readonly multiSelect: Locator;
    readonly resultFruit: Locator;
    readonly resultHeroes: Locator

    constructor(page:Page){
        this.page = page;
        this.selectFruit = page.getByTestId('dropdown-fruit')
        this.selectCountry = page.getByTestId('dropdown-country')
        this.selectLanguage = page.getByTestId('dropdown-language')
        this.multiSelect = page.getByTestId('dropdown-heroes')
        this.resultFruit = page.getByTestId('result-fruit')
        this.resultHeroes = page.getByTestId('result-heroes')
    }
}