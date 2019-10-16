describe('Minuta de Regulamento do Premia Sampa', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/premia-sampa-edicao-2020')
			.get('.PageTop')
			.should('contain','Minuta de Regulamento do Premia Sampa')
	})
})