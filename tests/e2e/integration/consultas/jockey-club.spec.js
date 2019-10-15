describe('Consulta JockeyClub', () => {
	// it('Testa viewports', () => {
	// 	cy.visit('/jockey-club')
	// 		.viewport('macbook-13')
	// 		.viewport('iphone-6')
	// 		.viewport('iphone-3')
	// 			.get('.PageTop')
	// 			.should('contain','PIU Jockey Club')
	// })
	it('Vai para consulta do Jockey e checa se título contém "PIU Jockey Club"', () => {
		cy.visit('/jockey-club')
			.viewport(1201, 1150)
			.get('.PageTop')
			.should('contain','PIU Jockey Club')
	})
})
v