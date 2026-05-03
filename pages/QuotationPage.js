class QuotationPage {
    constructor(page) {
        this.page = page;
        this.breakdown = '#quotation_breakdowncover';
        this.windshield = '#quotation_windscreenrepair';
        this.submit = 'input[value="Calculate Premium"]';
    }

    async fillQuotation(data) {
        await this.page.check(this.breakdown);
        await this.page.fill(this.windshield, data.windshield);
        await this.page.click(this.submit);
    }
}

module.exports = QuotationPage;