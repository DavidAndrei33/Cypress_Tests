context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
    })
   
    it('.type() - log in standard_user ', () => {
    
      cy.get('#user-name')
        .type('standard_user').should('have.value', 'standard_user')
   
    cy.get(`#password`)
      .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
    cy.get(`#login-button`)
    .click(`center`) })

    it('.type() -log in locked_out_user', () => {
    
        cy.get('#user-name')
          .type('locked_out_user').should('have.value', 'locked_out_user')
     
      cy.get(`#password`)
        .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
      cy.get(`#login-button`)
      .click(`center`) })

      it('.type() - log in problem_user', () => {
    
        cy.get('#user-name')
          .type('problem_user').should('have.value', 'problem_user')
     
      cy.get(`#password`)
        .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
      cy.get(`#login-button`)
      .click(`center`) })

      it('.type() - log in performance_glitch_user', () => {
    
        cy.get('#user-name')
          .type('performance_glitch_user').should('have.value', 'performance_glitch_user')
     
        cy.get(`#password`)
        .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
         cy.get(`#login-button`)
        .click(`center`) })

    
      it('.type() - log in with incorrect user and pass', () => {
    
        cy.get('#user-name')
          .type('performance_glitch_user3').should('have.value', 'performance_glitch_user3')
     
      cy.get(`#password`)
        .type (`3secret_sauce`) .should(`have.value`, `3secret_sauce`)
      cy.get(`#login-button`)
      .click(`center`) })
     
      it('.type() - log in performance_glitch_user and sort by price lo-hi', () => {
    
        cy.get('#user-name')
          .type('performance_glitch_user').should('have.value', 'performance_glitch_user')
     
        cy.get(`#password`)
        .type (`secret_sauce`) .should(`have.value`, `secret_sauce`)
         cy.get(`#login-button`)
        .click(`center`) 
        cy.get(`#inventory_filter_container > select`)
        .select(`lohi`)})
      
      })
    
    

     


    