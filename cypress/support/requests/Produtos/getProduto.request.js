/// <reference types="cypress" />

function listarProduto() {
    return cy.request({
        method: "GET",
        url: "produtos",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}


export {listarProduto}