const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            config.env = require(`./cypress/support/infosystem-dev.json`)
            config.baseUrl = config.env.baseUrl
            config.baseUri = config.env.baseUri

            return config
        }
    }
})