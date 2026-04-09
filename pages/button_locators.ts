import {test, expect, Locator, Page} from '@playwright/test'

export class inputButtons{
    readonly page: Page;
    readonly homeButton: Locator;
    readonly findLocation: Locator;
    readonly findColor: Locator;
    readonly sizeButton: Locator;
    readonly disabledButton: Locator;
    readonly holdButton: Locator;
    readonly dblClick: Locator;
    readonly rightClick: Locator;
    readonly actionResult: Locator;

    constructor(page:Page){
        this.page = page;
        this.homeButton = page.getByRole('button',{name:'Go To Home'})
        this.findLocation = page.getByRole('button',{name:'Find Location'})
        this.findColor = page.getByRole('button',{name:'Find my color?'})
        this.sizeButton = page.getByRole('button',{name:'Do you know my size?'})
        this.disabledButton = page.getByRole('button',{name:'Disabled'})
        this.holdButton = page.getByTestId('btn-click-hold')
        this.dblClick = page.getByRole('button',{name:'Double Click Me'})
        this.rightClick = page.getByRole('button',{name:'Right Click Me'})
        this.actionResult = page.getByTestId('btn-action-result')
    }
}