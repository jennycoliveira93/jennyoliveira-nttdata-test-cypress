/// <reference types="cypress" />

function apagarUsuario(id) {
    return cy.request({
        method: "DELETE",
        url: Cypress.env('baseUri') + `/usuarios/${id}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}


export { apagarUsuario }