class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.registerLink = 'text=Register';
    this.firstname = '#user_firstname';
    this.lastname = '#user_surname';
    this.phone = '#user_phone';
    this.email = '#user_email';
    this.password = '#user_password';
    this.submit = 'input[type="submit"]';
  }

  async gotoRegister() {
    await this.page.click('text=Register');
    await this.page.waitForSelector('#user_email'); // ✅ correct place
  }
  async register(user) {
    await this.page.fill(this.firstname, user.firstname);
    await this.page.fill(this.lastname, user.lastname);
    await this.page.fill(this.phone, user.phone || '');
    await this.page.fill(this.email, user.email || '');
    await this.page.fill(this.password, user.password || '');
    await this.page.click(this.submit);
  }
}

module.exports = RegistrationPage;

