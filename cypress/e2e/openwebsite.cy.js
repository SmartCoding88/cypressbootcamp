/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://admin-demo.nopcommerce.com/login', {timeout:6000})
    cy.get("#Email").clear().type('admin@yourstore.com')
    cy.get("#Password").clear().type("admin")
    cy.get(".login-button").click()
  })
})

// context("Test",()=>{
//   specify("it",()=>{

//   })
// })