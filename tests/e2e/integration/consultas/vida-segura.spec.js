describe('Vida Segura', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/vida-segura')
			.get('.PageTop')
			.should('contain','Vida Segura, o Plano de Segurança Viária do Município de São Paulo')
	})
})