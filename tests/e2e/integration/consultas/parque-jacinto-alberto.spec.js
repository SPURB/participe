describe('PARQUE JACINTHO ALBERTO', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/parque-jacinto-alberto')
			.get('.PageTop')
			.should('contain','PARQUE JACINTHO ALBERTO')
	})
})