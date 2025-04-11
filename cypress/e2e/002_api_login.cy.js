/// <reference types="cypress" />

import * as PostLogin from '../support/requests/postLogin.request'

describe('Login', () => {
    it('Realizar login via API', () => {
        PostLogin.autenticacao().should((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    })
})