describe('Home', () => {
	it('Existe h1 com substring "participe"', () => {
		cy.visit('/')
			.get('h1')
			.should('contain','participe')
	})
})
