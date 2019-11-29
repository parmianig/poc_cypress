import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://stage.sunglasshut.com/UserSignInView'
const queryString = '?catalogId=20602&langId=-1&storeId=10152'

Given('browser is on sign-in page', () => {
    cy.visit(url + queryString)
})

Given('user has valid credentials', () => {
    cy.login('test.sgh.us@abstract.it', 'Password1!')
})

When('user sign-in', ()=>{
    cy.get('form').contains('SIGN IN').click()
})
 
Then('the browser should show the welcome page', ()=>{
    cy.contains('h2', 'MY ACCOUNT')
})