describe('USU_homework', () => {
  it('Visit Schwarzenegger on Wikipedia', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    cy.get("#searchInput").type("Schwarzenegger").type("{enter}");

    cy.url().should('include','/wiki/Arnold_Schwarzenegger')
  })
})