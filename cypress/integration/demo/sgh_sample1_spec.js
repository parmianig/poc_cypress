/// <reference types="Cypress" />

describe('Go to homepage', function() {
    it('Visit SGH stage homepage', function() {
        cy.visit('https://stage.sunglasshut.com')
    })
})