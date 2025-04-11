/// <reference types="cypress" />


function listar() {
    return cy.request({
        method: "GET",
        url: Cypress.env('baseUri') + '/usuarios',
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
    })
}

export { listar }


function listarUsuarioPorEmail(email, auth) {
    return cy.request({
        method: "GET",
        url: `usuarios/${email}`,
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false
    })
}

export { listarUsuarioPorEmail }