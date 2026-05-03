class DashboardPage {
    constructor(page) {
        this.page = page;
        this.logoutBtn = 'a:has-text("Log out")';
        this.requestQuote = 'text=Request Quotation';
    }

    async verifyLogin() {
        await this.page.waitForSelector(this.logoutBtn, { timeout: 10000 });
    }

    async clickQuotation() {
        await this.page.waitForSelector(this.requestQuote, { timeout: 10000 });
        await this.page.click(this.requestQuote);
    }
}

module.exports = DashboardPage;