/// <reference types="Cypress" />

const err_requiresPassword = 'Your password must be between 6 and 12 characters long and is case sensitive.'
const err_requiresValidUsernameAndPassword = 'There is a problem with the email address and/or password you entered. Please ensure all fields are completed properly.'
const err_requiresEmail = 'Please provide a valid email address.'
const queryString = '?catalogId=20602&langId=-1&storeId=10152'

describe('My First Test', function() {
    it('greets with signin', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView' + queryString)
        cy.get('.first').contains('Sign In')
    })

    it('links to create user', () => {
        cy.visit('https://stage.sunglasshut.com/CreateAccountView' + queryString)
        cy.contains('h2', 'Create an account')
    })

    it('requires email', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView' + queryString)

        cy.get('form').contains('SIGN IN').click()
        cy.get('#WC_AccountDisplay_FormInput_logonId_In_Logon_1_copy4-error')
            .should('contain', err_requiresEmail)
    })

    it('requires password', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView' + queryString)

        cy.login('test@test.it', '')
        cy.get('form').contains('SIGN IN').click()
        cy.get('#WC_AccountDisplay_FormInput_logonPassword_In_Logon_1_copy4-error')
            .should('contain', err_requiresPassword)
    })

    it('requires valid username and password', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView' + queryString)

        cy.login('test@test.it', 'qqqqqqqqq')
        cy.get('form').contains('SIGN IN').click()
        cy.get('#logonErrorMessage_copy4')
            .should('contain', err_requiresValidUsernameAndPassword)
    })

    it('navigates to successful login  ', () => {
        cy.visit('https://stage.sunglasshut.com/UserSignInView' + queryString)

        cy.login('test.sgh.us@abstract.it', 'Password1!')
        cy.get('form').contains('SIGN IN').click()
        cy.contains('h2', 'MY ACCOUNT')
    })

})