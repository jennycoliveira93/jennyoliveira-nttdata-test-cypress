/// <reference types="cypress" />

import * as PostProdutos from '../support/requests/Produtos/postProduto.request'
import * as PostLogin from '../support/requests/postLogin.request'
import * as DeleteProdutos from '../support/requests/Produtos/deleteProduto.request'

describe('Post Produtos', () => {
    it('Adicionar um produto', () => {
        PostLogin.autenticacao().should((response) => {
            expect(response.status).to.eq(200)
            PostProdutos.adicionar(response.body.authorization).should((resProduto) => {
                expect(resProduto.status).to.eq(201)
                expect(resProduto.body.message).to.eq('Cadastro realizado com sucesso')
            })
        })
    })
})

describe('Post Produtos', () => {
    it('Deletar um produto', () => {
        PostLogin.autenticacao().should((response) => {
            expect(response.status).to.eq(200)
                DeleteProdutos.apagarProduto(resProduto.body._id, response.body.authorization).should((resDelete) => {
                    expect(resDelete.status).to.eq(200)
                    expect(resDelete.body.message).to.eq('Registro excluído com sucesso')
                })
            })
        })
})
