describe('Política de Turismo da Cidade de São Paulo', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/politica-municipal-turismo')
			.get('.PageTop')
			.should('contain','Política de Turismo da Cidade de São Paulo')
	})
})