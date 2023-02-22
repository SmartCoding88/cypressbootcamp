/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {

    const menuList = [
      "Dashboard",
      "Catalog",
      "Sales",
      "Customers",
      "Promotions",
      "Content management",
      "Configuration",
      "System",
      "Reports",
      "Help"
    ]
    cy.viewport(1920,1080)
    cy.visit('https://admin-demo.nopcommerce.com/login', { timeout: 6000 })
    cy.get("#Email").clear().type('admin@yourstore.com')
    cy.get("#Password").clear().type("admin")
    cy.get(".login-button").click()

    //testing dashboard navigation
    cy.get("ul[class*='nav-pills']>li>a>p").as("MenuList")
    cy.get("ul[class*='nav-pills']>li>a").as("MenuList2")


    cy.get('@MenuList2').each((item, index, list) => {
      if (index > 1) {
        cy.get(item).click()
      }
    })
    cy.wait(10000)
    cy.get("@MenuList").each((item, index, list) => {

     // cy.wrap(item).should('contain.text', menuList[index])

     expect(
      Cypress.$(item)
      .text()
      .trim()
     ).eq(menuList[index])
     
    })


  })
})

// context("Test",()=>{
//   specify("it",()=>{

//   })
// })