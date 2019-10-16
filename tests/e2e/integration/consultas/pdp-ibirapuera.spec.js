describe('MINUTA DO PLANO DIRETOR DO PARQUE IBIRAPUERA', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/pdp-ibirapuera')
			.get('.PageTop')
			.should('contain','MINUTA DO PLANO DIRETOR DO PARQUE IBIRAPUERA')
	})
})