/// <reference types="Cypress" />

describe('Go to homepage', function() {
    it('Check the shopping bag is present', function() {
        cy.visit('https://stage.sunglasshut.com').get('.icon-cart')
    })
})