const { devices } = require('@playwright/test');

module.exports = {
  use: {
    headless: true, 
    viewport: { width: 1280, height: 720 }, 
    browserName: 'chromium' 
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
};