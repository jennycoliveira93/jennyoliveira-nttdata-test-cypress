/// <reference types="cypress" />

const payloadLogin = require('../../fixtures/payloads/payloadLogin.json')

function autenticacao() {
    return cy.request({
        method: "POST", 
        url: Cypress.env('baseUri') + '/login',
        headers: {
            accept: "application/json"
        }, 
        failOnStatusCode: false,
        body: payloadLogin
    })
}

export {autenticacao}