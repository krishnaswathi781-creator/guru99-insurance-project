class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = '#email';
    this.password = '#password';
    this.loginBtn = 'input[type="submit"]';
  }

  async goto() {
    await this.page.goto('https://demo.guru99.com/insurance/v1/index.php');
  }

  async login(email, password) {
    await this.page.fill(this.email, email);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }
}

module.exports = LoginPage;