/// <reference types="cypress" />
import locators from '../support/locators'

/*
Funcionalidade: Tela de Cadastro 
    Como usuário da Tela de Cadastro de usuário do front do ServeRest
    Quero clicar no Botão Entrar
    Para validar o comportamento e as regras da funcionalidade

    Cenário 1: Cadastrar com sucesso como administrador
        Dado que eu esteja na tela de Login 
        E ao clicar na opção Cadastre-se
        E entrar na tela de Cadastro 
        Quando eu preencher os campos nome, email e senha com valores válidos
        E selecionar o checkbox de Administrador 
        E clicar no botão Entrar
        Então a aplicação deverá validar os dados 
        E criar um novo cadastro 
        E logar o usuário no painel Admin da aplicação 
        
    Cenário 2: Tentar cadastrar com email vazio 
        Dado que eu esteja na tela de Login 
        E ao clicar na opção Cadastre-se
        E entrar na tela de Cadastro 
        Quando eu não preencher o campo email 
        E selecionar o checkbox de Administrador 
        E clicar no botão Entrar
        Então a aplicação deverá validar os dados 
        E informar que o email é obrigatório 

    Cenário 3: Tentar cadastrar com email inválido
        Dado que eu esteja na tela de Login 
        E ao clicar na opção Cadastre-se
        E entrar na tela de Cadastro 
        Quando eu preencher o campo email com um dado inválido 
        E selecionar o checkbox de Administrador 
        E clicar no botão Entrar
        Então a aplicação deverá validar os dados 
        E informar que o email é inválido 

*/

describe('Funcionalidade: Tela Login - Opção Cadastre-se', () => {
    before(() => {
        cy.fixture('usuario.json').then((usuarioFixture) => {
            cy.API_ObterEmailEExcluirUserPorId(usuarioFixture.admin.emailValido)
        })
    })

    afterEach(() => {
        cy.screenshot()
    })

    context('Dado que eu acesse a tela de Login do front do ServeRest', () => {
        context('E que eu clique na opção Cadastre-se', () => {
            context('E que eu esteja na tela Cadastro', () => {
                beforeEach(() => {
                    cy.visit('/login')

                    cy.get(locators.LOGIN.OPCAO_CADASTRE_SE)
                        .should('be.visible')
                        .click()

                    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/cadastrarusuarios`)
                })

                context('Cenário 1: Validar Cadastro Administrador', () => {
                    const exemplos = [
                        { nome: 'nomeValido1', email: 'emailValido', senha: 'senhaValida1', mensagem: 'Cadastro realizado com sucesso' },
                        { nome: 'nomeValido', email: 'emailInvalidoVazio', senha: 'senhaValida', mensagem: 'Email é obrigatório' },
                        { nome: 'nomeValido2', email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida2', mensagem: 'Email deve ser um email válido' },
                    ]

                    exemplos.forEach((ex) => {
                        context(`Quando eu informar os campos ${ex.nome}, ${ex.email}, ${ex.senha} e opcão Cadastrar como administrador`, () => {
                            it(`Então na tela de Cadastro deverá apresentar a mensagem ${ex.mensagem}`, () => {
                                cy.fixture('usuario').then((usuarioFixture) => {
                                    cy.realizarCadastro(usuarioFixture.admin[ex.nome], usuarioFixture.admin[ex.email], usuarioFixture.admin[ex.senha])
                                })

                                // cy.get(locators.LOGIN.FORM)
                                //     .should('be.visible')
                                //     .and('contain', ex.mensagem)
                            })
                        })
                    })
                })
            })
        })
    })
})