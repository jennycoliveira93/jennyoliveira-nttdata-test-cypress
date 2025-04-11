/// <reference types="cypress" />

const payloadCadastro = require('../../../fixtures/payloads/payloadCadastroUsuario.json')

function cadastrarUsuario() {
    return cy.request({
        method: "POST", 
        url: Cypress.env('baseUri') + '/usuarios',
        headers: {
            accept: "application/json"
        }, 
        failOnStatusCode: false,
        body: payloadCadastro
    })
}

export {cadastrarUsuario}