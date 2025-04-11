/// <reference types="cypress" />
import locators from '../support/locators'

/*
Funcionalidade: Tela de Login 
    Como usuário da Tela Login do front do ServeRest
    Quero clicar no Botão Entrar
    Para validar o comportamento e as regras da funcionalidade

    Cenário 1: Tentar logar com dados inválidos
        Dado que eu estou na Tela de Login 
        Quando eu preencher os campos email e senha com valores inválidos 
        E clicar no botão Entrar
        Então a aplicação deverá validar os dados e exibir uma mensagem de alerta 
        
        1. Entrar na aplicação ServeRest
        2. Na tela de login, inserir no campo email o valor inválido
        3. Em seguida, inserir no campo senha o valor inválido  
        4. Clicar no botão Entrar
        5. Validar que a mensagem "Email e/ou senha inválidos" é exibida 

    Cenário 2: Logar com sucesso na aplicação 
        Dado que eu estou na Tela de Login 
        Quando eu preencher os campos email e senha com valores válidos e existentes  
        E clicar no botão Entrar
        Então a aplicação deverá validar os dados e entrar na aplicação com sucesso

*/

describe('Funcionalidade: Tela de Login', () => {
  
  //Cadastro de User direto na API
  before(() => {
    cy.fixture('admin_user').then((usuarioFixture) => {
      cy.API_ObterEmailEIncluirUserAdmin(usuarioFixture.adminValido.nomeValido, usuarioFixture.adminValido.emailValido, usuarioFixture.adminValido.senhaValida)
    })
  })

  afterEach(() => {
    cy.screenshot()
  })

  context('Dado que eu estou na tela de Login do ServeRest', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    context('Cenário 1: Tentar logar com dados inválidos', () => {
      const exemplos = [
        { email: 'emailInvalidoVazio', senha: 'senhaValida', mensagem: 'Email não pode ficar em branco' },
        { email: 'emailValido', senha: 'senhaInvalidaVazia', mensagem: 'Password não pode ficar em branco' },
        { email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida', mensagem: 'Email deve ser um email válido' },
        { email: 'emailInvalidoNaoCadastrado', senha: 'senhaInvalidaNaoCadastrada', mensagem: 'Email e/ou senha inválidos' },
      ]

      exemplos.forEach((ex) => {
        context(`Quando eu preencher os campos email e senha com valores inválidos ${ex.email} e ${ex.senha}`, () => {
          it(`Então a aplicação deverá validar os dados e exibir uma mensagem de alerta ${ex.mensagem}`, () => {
            cy.fixture('admin_user').then((loginFixture) => {
              cy.realizarLogin(loginFixture.invalido[ex.email], loginFixture.invalido[ex.senha])
            })

            cy.get(locators.LOGIN.LOGIN_FORM)
              .should('be.visible')
              .and('contain', ex.mensagem)
          })
        })
      })
    })

    context('Cenário 2: Logar com sucesso na aplicação', () => {
        context('Quando eu preencher os campos email e senha com valores válidos e existentes', () => {
          beforeEach(() => {
            cy.fixture('login').then((loginFixture) => {
              cy.realizarLogin(loginFixture.adminValido.emailValido, loginFixture.adminValido.senhaValida)
            })
          })
  
          it('Então a aplicação deverá validar os dados e entrar na aplicação com sucesso', () => {
            cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/home`)
  
            cy.get(locators.HOME.TEXTO_BEM_VINDO)
              .should('be.visible')
              .and('contain', 'Bem Vindo')
  
            cy.get(locators.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE)
              .should('be.visible')
              .and('contain', 'Este é seu sistema para administrar seu ecommerce.')
          })
        })
      })

  })
})