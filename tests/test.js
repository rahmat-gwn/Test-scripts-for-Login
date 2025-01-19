const { chromium } = require('playwright'); 
const assert = require('assert');

describe('Google Login Test', function() {
  this.timeout(10000);  

  let browser;
  let page;


  before(async function() {

    browser = await chromium.launch({ headless: false }); 
    page = await browser.newPage();
  });
  
  after(async function() {
    await browser.close();
  });

  it('should open Google login page, input email and password', async function() {
    await page.goto('https://accounts.google.com/signin', { waitUntil: 'domcontentloaded' });
    await page.fill('input[type="email"]', 'your-email@gmail.com'); 
    await page.click('#identifierNext'); 
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    await page.fill('input[type="password"]', 'your-password'); 
    await page.click('#passwordNext'); 
    await page.waitForSelector('input[name="q"]', { timeout: 10000 }); 
    const title = await page.title();
    assert.strictEqual(title, 'Google');
  });
});
