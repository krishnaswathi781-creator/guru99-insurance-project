export class pageAction {

    constructor(page) {
        this.page = page;

    }
    async Click(selector) {
        await this.page.click(selector);
    }
}
         async fillvalue(selector, value)
{
    await this.page.fill(selector, value);
}
    async check(selector);
