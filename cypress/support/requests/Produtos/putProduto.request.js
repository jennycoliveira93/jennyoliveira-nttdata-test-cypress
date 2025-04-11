/// <reference types="cypress" />

const payloadAlterarProduto = require('../../../fixtures/payloads/payloadAlterarProduto.json')

function alterar(auth) {
    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAlterarProduto
    })
}


export {alterar}