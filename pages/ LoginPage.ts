export class LoginPage {
  page: any;
  usernameInput: any;
  passwordInput: any;
  loginButton: any;

  constructor(page: any) {
    this.page = page;

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
  }

  async open() {
    await this.page.goto('https://demo.openmrs.org/openmrs/login.htm');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
