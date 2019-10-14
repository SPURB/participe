describe('Consulta JockeyClub', () => {
	it('Existe h1 com substring "participe"', () => {
		cy.visit('/jockey-club')
			.get('.PageTop')
			.should('contain','PIU Jockey Club')
	})
})
