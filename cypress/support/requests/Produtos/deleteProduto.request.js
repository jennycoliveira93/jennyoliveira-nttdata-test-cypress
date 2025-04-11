/// <reference types="cypress" />

function apagarProduto(id, auth) {
    return cy.request({
        method: "DELETE",
        url: Cypress.env('baseUri') + `/produtos/${id}`,
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false
    })
}


export { apagarProduto }