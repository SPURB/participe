describe('PARQUE JARDIM FELICIDADE', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/parque-jardim-felicidade')
			.get('.PageTop')
			.should('contain','PARQUE JARDIM FELICIDADE')
	})
})