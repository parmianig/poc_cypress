/// <reference types="Cypress" />

describe("My First Abstract Test", function() {
    it('Does not do match', function() {
        expect(true).to.equal(false)
    })
})