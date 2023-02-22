/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://admin-demo.nopcommerce.com/login', {timeout:6000})
    cy.get("#Email").clear().type('admin@yourstore.com')
    cy.get("#Password").clear().type("admin")
    cy.get(".login-button").click()

    //testing dashboard navigation
    cy.get("ul[class*='nav-pills']>li>a>p").as("MenuList")
    cy.get("ul[class*='nav-pills']>li>a").as("MenuList2")

    cy.wait(10000)
    cy.get('@MenuList2').each((item, index, list)=>{
      if(index>1){
        cy.get(item).click()
      }
    })

    cy.get("@MenuList").each((item,index,menuList)=>{
      
      cy.wrap(item).should('contain.text', menuList[index])
  
    })

    
  })
})

// context("Test",()=>{
//   specify("it",()=>{

//   })
// })