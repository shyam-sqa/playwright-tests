import {Locator,Page} from "@playwright/test";

export class datepicker{
    readonly page:Page;
    private datePickers: Record<string, string> = {
    todaydate: 'input-today-date',
    birthdate: 'input-birthday',
  }
    constructor(page:Page){
        this.page = page;
        
    }
    private getDatePicker(name: string):Locator{
        const testId = this.datePickers[name];
        if (!testId) {
            throw new Error(`DatePicker "${name}" not found`);
        }
        return this.page.getByTestId(testId)
    }
    async getDate(name:string):Promise<string>{
        const testId = this.datePickers[name];
        return await this.getDatePicker(name).inputValue()
    }

    async setDatePicker(name:string, date:string){
        await this.getDatePicker(name).fill(date)
    }
}