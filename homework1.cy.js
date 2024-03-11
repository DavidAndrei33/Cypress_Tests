context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
    })
   
//     it('- log in standard_user ', () => {
    
//       cy.get('#user-name')
//         .type('standard_user').should('have.value', 'standard_user')
   
//     cy.get(`#password`)
//       .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//     cy.get(`#login-button`)
//     .click(`center`) })

//     it(' -log in locked_out_user', () => {
    
//         cy.get('#user-name')
//           .type('locked_out_user').should('have.value', 'locked_out_user')
     
//       cy.get(`#password`)
//         .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//       cy.get(`#login-button`)
//       .click(`center`) })

//       it(' - log in problem_user', () => {
    
//         cy.get('#user-name')
//           .type('problem_user').should('have.value', 'problem_user')
     
//       cy.get(`#password`)
//         .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//       cy.get(`#login-button`)
//       .click(`center`) })

//       it(' - log in performance_glitch_user', () => {
    
//         cy.get('#user-name')
//           .type('performance_glitch_user').should('have.value', 'performance_glitch_user')
     
//         cy.get(`#password`)
//         .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//          cy.get(`#login-button`)
//         .click(`center`) })

    
//       it('. - log in with incorrect user and pass', () => {
    
//         cy.get('#user-name')
//           .type('performance_glitch_user3').should('have.value', 'performance_glitch_user3')
     
//       cy.get(`#password`)
//         .type (`3secret_sauce`) .should(`have.value`, `3secret_sauce`)
//       cy.get(`#login-button`)
//       .click(`center`) })
     
//       it(' - log in performance_glitch_user and sort by price lo-hi', () => {
    
//         cy.get('#user-name')
//           .type('performance_glitch_user').should('have.value', 'performance_glitch_user')
     
//         cy.get(`#password`)
//         .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//          cy.get(`#login-button`)
//         .click(`center`) 
//         cy.get(`#inventory_filter_container > select`)
//         .select(`lohi`)
//         cy.get(`#item_2_title_link > div`)
//         .click(`center`)
//         })
      
    
    
//        it(`open product and verify text in description and picture checking`, () => {

//             cy.get('#user-name')
//           .type('performance_glitch_user').should('have.value', 'performance_glitch_user')
     
//         cy.get(`#password`)
//         .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//          cy.get(`#login-button`)
//         .click(`center`) 
//         cy.get(`#item_4_title_link > div`)
//         .click(`center`)
        
//         cy.get('#inventory_item_container > div > div > div > div.inventory_details_desc')
//         .should('be.visible') 
//         .invoke('text') 
//         .should('not.be.empty'); 

//         cy.get('#inventory_item_container > div > div > img')
//         .should('be.visible') 
//         .should('have.attr', 'src')  
// });
       
//   it('add items to cart and remove', () => {
    
//       cy.get('#user-name')
//         .type('standard_user').should('have.value', 'standard_user')
   
//     cy.get(`#password`)
//       .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
//     cy.get(`#login-button`)
//     .click(`center`)  

//     //additems
//     cy.get(`#inventory_container > div > div:nth-child(1) > div.pricebar > button`)
//     .click(`center`) .should(`have.class`, `btn_secondary btn_inventory`)
//     cy.get(`#inventory_container > div > div:nth-child(3) > div.pricebar > button`)
//     .click(`center`) .should(`have.class`, `btn_secondary btn_inventory`)
//     cy.get(`#inventory_container > div > div:nth-child(6) > div.pricebar > button`)
//     .click(`center`) .should(`have.class`, `btn_secondary btn_inventory`)
//     //remove items

//     cy.get(`#inventory_container > div > div:nth-child(1) > div.pricebar > button`)
//     .click(`center`) .should(`have.class`, `btn_primary btn_inventory`)
//     cy.get(`#inventory_container > div > div:nth-child(3) > div.pricebar > button`)
//     .click(`center`) .should(`have.class`, `btn_primary btn_inventory`)
//     cy.get(`#inventory_container > div > div:nth-child(6) > div.pricebar > button`)
//     .click(`center`) .should(`have.class`, `btn_primary btn_inventory`)
// })

it('add items to cart and remove', () => {
    
          cy.get('#user-name')
            .type('standard_user').should('have.value', 'standard_user')
       
        cy.get(`#password`)
          .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
        cy.get(`#login-button`)
        .click(`center`)  
        
        //additems
        cy.get(`#inventory_container > div > div:nth-child(1) > div.pricebar > button`)
        .click(`center`) .should(`have.class`, `btn_secondary btn_inventory`)

        let initialItemCount;
        cy.get('#shopping_cart_container > a > span').then($badge => {
          initialItemCount = parseInt($badge.text());
        });

        cy.get(`#inventory_container > div > div:nth-child(3) > div.pricebar > button`)
        .click(`center`) .should(`have.class`, `btn_secondary btn_inventory`)

        cy.get('.shopping_cart_badge')
        .should('contain', initialItemCount + 1)


        cy.get(`#inventory_container > div > div:nth-child(6) > div.pricebar > button`)
        .click(`center`) .should(`have.class`, `btn_secondary btn_inventory`)

        cy.get('.shopping_cart_badge')
        .should('contain', initialItemCount + 1)
        
        //remove items
    
        cy.get(`#inventory_container > div > div:nth-child(1) > div.pricebar > button`)
        .click(`center`) .should(`have.class`, `btn_primary btn_inventory`)
        cy.get(`#inventory_container > div > div:nth-child(3) > div.pricebar > button`)
        .click(`center`) .should(`have.class`, `btn_primary btn_inventory`)
        cy.get(`#inventory_container > div > div:nth-child(6) > div.pricebar > button`)
        .click(`center`) .should(`have.class`, `btn_primary btn_inventory`)
    })
})
    

