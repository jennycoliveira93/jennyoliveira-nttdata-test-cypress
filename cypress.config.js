const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      config.env = require(`./cypress/support/infosystem-dev.json`)
      config.baseUrl = config.env.baseUrl
      config.baseUri = config.env.baseUri
      
      return config
    }
  }
})
