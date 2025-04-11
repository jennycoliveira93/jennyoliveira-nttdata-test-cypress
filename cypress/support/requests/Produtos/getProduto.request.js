/// <reference types="cypress" />

function listarProduto() {
    return cy.request({
        method: "GET",
        url: Cypress.env('baseUri') + "/produtos",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}


export { listarProduto }