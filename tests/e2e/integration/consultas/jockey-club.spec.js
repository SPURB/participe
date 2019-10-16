describe('Consulta JockeyClub', () => {
	// it('Vai para consulta do Jockey e checa se título contém "PIU Jockey Club"', () => {
	// 	cy.visit('/jockey-club')
	// 		.viewport(1201, 1150)
	// 		.get('.JockeyClub')
	// })
	it('Vai até o final da página', () => {
		cy.visit('/jockey-club').viewport(1201, 1150)
		cy.scrollTo('bottom')
	})
})
