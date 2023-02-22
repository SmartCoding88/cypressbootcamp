const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  "include": ["./node_modules/cypress", "cypress/**/*.js"],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
