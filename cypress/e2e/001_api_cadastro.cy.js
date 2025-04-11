/// <reference types="cypress" />

import * as PostUsuarios from '../support/requests/Usuarios/postUsuarios.request'
import * as GetUsuarios from '../support/requests/Usuarios/getUsuarios.request'
import * as DeleteUsuarios from '../support/requests/Usuarios/deleteUsuarios.request'
import * as PostLogin from '../support/requests/postLogin.request'

describe('Cadastro', () => {
    it('Realizar cadastro via API', () => {
        PostUsuarios.cadastrarUsuario().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.be.not.null
        }).then((response) => {
            const id = response.body._id;
            DeleteUsuarios.apagarUsuario(id).should((responseDel) => {
                expect(responseDel.status).to.eq(200)
                expect(responseDel.body.message).to.eq('Registro excluído com sucesso')
            })
        })

    })
})

describe('Buscar Usuarios Cadastrados', () => {
    it('Get Lista de usuários', () => {
        GetUsuarios.listar().should((resGet) => {
            expect(resGet.status).to.eq(200)
            expect(resGet.body).to.be.not.null
        })
    })
})