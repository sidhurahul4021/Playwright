import {Locator,Page} from '@playwright/test';


export class orangeHRMPage{

    readonly page: Page;

    readonly username: Locator;
    readonly password: Locator;



    constructor(page: Page){
    this.username = page.locator("input[name='username']");
    this.password = page.locator("input[name='password']");
    }
}