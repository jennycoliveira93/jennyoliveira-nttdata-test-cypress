/// <reference types="cypress" />
import locators from './locators'

// UI Actions
Cypress.Commands.add('realizarLogin', (email = '', senha = '') => {
  cy.get(locators.LOGIN.BOTAO_ENTRAR).as('botaoEntrar')
  
  if (email !== '') {
    cy.get(locators.LOGIN.CAMPO_EMAIL)
      .should('be.visible')
      .click()
      .type(email)
  }

  if (senha !== '') {
    cy.get(locators.LOGIN.CAMPO_SENHA)
      .should('be.visible')
      .click()
      .type(senha, { log: false })
  }

  cy.get(locators.LOGIN.BOTAO_ENTRAR)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('realizarCadastro', (nome = '', email = '', senha = '') => {
  cy.get(locators.CADASTRO.OPCAO_ADMIN).as('opcaoAdmin')

  if (nome !== '') {
    cy.get(locators.CADASTRO.CAMPO_NOME)
      .should('be.visible')
      .click()
      .type(nome)
  } 

  if (email !== '') {
    cy.get(locators.LOGIN.CAMPO_EMAIL)
      .should('be.visible')
      .click()
      .type(email)
  }

  if (senha !== '') {
    cy.get(locators.LOGIN.CAMPO_SENHA)
      .should('be.visible')
      .click()
      .type(senha, { log: false })
  }

  cy.get('@opcaoAdmin')
    .should('be.visible')
    .click()

  cy.get(locators.CADASTRO.BOTAO_CADASTRAR)
    .should('be.visible')
    .click()
})

// API Actions
Cypress.Commands.add('API_ObterEmailEIncluirUserAdmin', (nome, email, senha) => {
  cy.request({
    url: Cypress.env('baseUri') + `/usuarios?email=${email}`,
    method: 'GET',
  }).then(response => {
    let retornoGet = response.body

    if ((retornoGet.quantidade) == 0) {
      cy.request({
        url: Cypress.env('baseUri') + '/usuarios',
        method: 'POST',
        headers: { 'accept': 'application/json', 'content-type': 'application/json' },
        body: { "nome": nome, "email": email, "password": senha, "administrador": "true" }
      })
    }
  })
})

Cypress.Commands.add('API_ObterEmailEExcluirUserPorId', (email) => {
  cy.request({
    url: Cypress.env('baseUri') + `/usuarios?email=${email}`,
    method: 'GET',
  }).then(response => {
    let retornoGet = response.body

    if ((retornoGet.quantidade) == 1) {
      let idUsuarioRetornado = retornoGet.usuarios[0]._id

      cy.request({
        url: Cypress.env('baseUri') + `/usuarios/${idUsuarioRetornado}`,
        method: 'DELETE',
      })
    }
  })
})