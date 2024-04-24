describe('template spec', () => {
  it('should increment and decrement count', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="counter-text"]').contains('Count: 0');
    cy.get('[data-testid="counter-increment-btn"]').click();
    cy.get('[data-testid="counter-text"]').contains('Count: 1');
    cy.get('[data-testid="counter-increment-btn"]').click();
    cy.get('[data-testid="counter-text"]').contains('Count: 2');
    cy.get('[data-testid="counter-decrement-btn"]').click();
    cy.get('[data-testid="counter-text"]').contains('Count: 1');
  })

  it('should search', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="search-input"]')
    .type('Test')
    .should('have.value', 'Test');
  })

  it('should select documentary on button click', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="genre-button-All"]')
    .then(($el) => $el[0].className)
    .should("match", /selected/);
    cy.get('[data-testid="genre-button-Documentary"]')
    .click()
    cy.get('[data-testid="genre-button-Documentary"]')
    .then(($el) => $el[0].className)
    .should("match", /selected/);
  })
})