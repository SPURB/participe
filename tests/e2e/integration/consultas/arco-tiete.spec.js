describe('/arco-tietê', () => {
	it('Testa /arco-tietê', () => {
		cy.visit('/arco-tiete')
			.get('.PageTop')
			.should('contain','PIU Arco Tietê')
	})
})
