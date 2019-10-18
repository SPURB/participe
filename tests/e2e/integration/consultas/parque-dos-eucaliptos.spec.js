describe('PARQUE DOS EUCALIPTOS', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/parque-dos-eucaliptos')
			.get('.PageTop')
			.should('contain','PARQUE DOS EUCALIPTOS')
	})
})