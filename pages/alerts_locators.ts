import { Locator, Page } from "@playwright/test";

export class Alert{
    readonly page:Page
    readonly simpleAlert: Locator;
    readonly confirmAlert: Locator;
    readonly promptAlert: Locator;
    readonly toastAlert: Locator;
    readonly modalAlert: Locator;
    readonly shareAlert: Locator;
    readonly resultConfirm: Locator;
    readonly resultPrompt: Locator
    readonly shareInput: Locator
    readonly shareClose: Locator
    

    constructor(page:Page){
        this.page = page;
        this.simpleAlert = page.getByTestId('btn-simple-alert');
        this.confirmAlert = page.getByTestId('btn-confirm-alert');
        this.promptAlert = page.getByTestId('btn-prompt-alert');
        this.toastAlert = page.getByTestId('btn-toast-alert');
        this.modalAlert = page.getByTestId('btn-modal-alert');
        this.shareAlert = page.getByTestId('btn-dialog-share');
        this.resultConfirm = page.getByTestId('result-confirm');
        this.resultPrompt = page.getByTestId('result-prompt')
        this.shareInput = page.getByTestId('input-share-link')
        this.shareClose = page.getByTestId('btn-dialog-close')
    }
}
