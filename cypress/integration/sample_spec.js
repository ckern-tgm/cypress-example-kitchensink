describe('My First Test', function() {
      it('Visits the Kitchen Sink', function() {
              cy.visit('http://localhost:8081')
            })
    it('clicks link in type function', function() {
        cy.contains('type').click()
    })
    it("clicking 'type' navigates to a new url", function() {
        cy.url().should('include', '/commands/actions')
    })
})
