describe('Audiências Públicas para Plano Cicloviário', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/plano-cicloviario')
			.get('.PageTop')
			.should('contain','Audiências Públicas para Plano Cicloviário')
	})
})