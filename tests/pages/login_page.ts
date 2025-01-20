export class LoginPage {
    constructor(private page: Page) {}
  
    async goto() {
      await this.page.goto('/login'); 
    }
  
    async fillUsername(username: string) {
      await this.page.fill('#username', username); 
    }
  
    async fillPassword(password: string) {
      await this.page.fill('#password', password);
    }
  
    async clickLoginButton() {
      await this.page.click('button[type="submit"]'); 
    }
  }