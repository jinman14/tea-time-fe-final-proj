describe('Koala Tea Control', () => {
  it('has an expected', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('contain.text', 'Koala Tea Control');
  })

  it('has a functional search bar', () => {
    cy.visit('http://localhost:5173')
    cy.get('.search-form input')
    .click()
    .type('Twilight{enter}')
    cy.get('.tea-subscription-card')
    .each(($el) => {
      cy.wrap($el).should('contain.text', 'Twilight')
    })
  })

  it('can show details of a single card', () => {
    cy.visit('http://localhost:5173')
    cy.get('.tea-subscription-card')
    .first()
    .find('h3')
    .click()

    cy.url().should('include', '/subscriptions')
    cy.contains('Customer Email')
    cy.contains('Customer Address')
    cy.contains('Description')
    cy.contains('Brewing Time')
    cy.contains('Brewing Temperature')
  })

  it('has a functional back button', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Tea Subscriptions')

    cy.get('.tea-subscription-card')
    .first()
    .find('h3')
    .click()

    cy.contains('Oi, mate. Here be the deats')

    cy.get('.back-button')
    .click()
    cy.contains('Tea Subscriptions')
  })
})