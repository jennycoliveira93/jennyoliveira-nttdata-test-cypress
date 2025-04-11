/// <reference types="cypress" />

import * as PostUsuarios from '../support/requests/Usuarios/postUsuarios.request'
import * as GetUsuarios from '../support/requests/Usuarios/getUsuarios.request'

describe('Login', () => {
    it('Realizar cadastro via API', () => {
        PostUsuarios.cadastrarUsuario().should((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    })
})

describe('Buscar Usuarios Cadastrados', () => {
    it('Get Lista de usuários', () => {
        GetUsuarios.listar().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    })
})