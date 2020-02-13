describe('Testa consultas auto', () => {
	it('Testa se conteudo se conteúdo de pagetop está sendo renderizado em /consulta/concessao-martinelli-2020', () => {
		cy.visit('/consulta/concessao-martinelli-2020')
			.get('.PageTop')
			.should('contain','Edital de Concessão da Cobertura e Espaços do Edifício Martinelli')
	})
})
