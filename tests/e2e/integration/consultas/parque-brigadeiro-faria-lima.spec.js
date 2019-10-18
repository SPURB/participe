describe('PARQUE TENENTE BRIGADEIRO FARIA LIMA', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/parque-brigadeiro-faria-lima')
			.get('.PageTop')
			.should('contain','PARQUE TENENTE BRIGADEIRO FARIA LIMA')
	})
})