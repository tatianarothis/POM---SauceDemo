const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
