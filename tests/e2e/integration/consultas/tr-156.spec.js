describe('Termo de Referência 156', () => {
	it('Verifica se consulta está acessível', () => {
		cy.visit('/tr-156')
			.get('.PageTop')
			.should('contain','Termo de Referência para contratação de solução tecnológica de atendimento e digitalização de serviços públicos')
	})
})