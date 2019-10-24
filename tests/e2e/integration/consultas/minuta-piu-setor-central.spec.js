describe('/minuta-piu-setor-central', () => {
	it('Testa /minuta-piu-setor-central', () => {
		cy.visit('/minuta-piu-setor-central')
			.get('.PageTop')
			.should('contain','PIU Setor Central')
	})
})
