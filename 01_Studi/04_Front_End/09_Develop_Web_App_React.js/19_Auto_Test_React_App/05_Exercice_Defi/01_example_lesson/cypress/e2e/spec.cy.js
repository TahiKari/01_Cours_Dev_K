describe('Users', () => {
  it('should not render the name initially', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000') 

    // eslint-disable-next-line no-undef
    cy.contains('Arthur').should('not.exist')

    // eslint-disable-next-line no-undef
    cy.contains('Afficher Liste').click()

    // eslint-disable-next-line no-undef
    cy.contains('Arthur').should('exist')
  })
})