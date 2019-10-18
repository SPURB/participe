describe('PARQUE LAJEADO', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/parque-lajeado')
			.get('.PageTop')
			.should('contain','PARQUE LAJEADO')
	})
})