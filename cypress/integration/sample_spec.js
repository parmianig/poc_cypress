/// <reference types="Cypress" />

describe('My First Test', function() {
    it('greets with signin', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView?catalogId=20602&langId=-1&storeId=10152')
        cy.get('.first').contains('Sign In')
    })

    it('links to #register', () => {
        cy.visit('https://stage.sunglasshut.com/CreateAccountView?catalogId=20602&langId=-1&storeId=10152')
        cy.contains('h2', 'Create an account')
    })

    it('requires email', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView?catalogId=20602&langId=-1&storeId=10152')

        cy.get('form').contains('SIGN IN').click()
        cy.get('#WC_AccountDisplay_FormInput_logonId_In_Logon_1_copy4-error').should('contain', 'Please provide a valid email address.')
    })

    it('requires password', () => {

    })

    it('requires valid username and password', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView?catalogId=20602&langId=-1&storeId=10152')

        cy.login('test@test.it', 'qqqqqqqqq')
        cy.get('form').contains('SIGN IN').click()
        cy.get('#logonErrorMessage_copy4')
            .should('contain', 'There is a problem with the email address and/or password you entered. Please ensure all fields are completed properly.')
    })

    it('navigates to #/ to successful login  ', () => {

    })

})