/// <reference types="cypress" />

const payloadAddProduto = require('../../../fixtures/payloads/payloadAdicionarProduto.json')
var faker = require('faker');

function adicionar(auth) {
    payloadAddProduto.nome = `Maquina de lava ${faker.name.findName()}`
    payloadAddProduto.descricao = `project-${faker.random.uuid()}`
    return cy.request({
        method: "POST",
        url: Cypress.env('baseUri') + "/produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddProduto
    })
}


export { adicionar }