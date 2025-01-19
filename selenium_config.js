const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

module.exports = {
  createDriver: function() {
    return new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless()) // Menjalankan browser dalam mode headless
      .build();
  }
};
