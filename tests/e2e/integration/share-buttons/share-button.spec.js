describe('Teste unitário para o component modal do ThreadComments', () => {

	const slug = '/governo-aberto' // Variavel para mudar a slug do teste

	it('Testa se elementos de share estão visíveis', () => {
		cy.visit(slug)
			.get('[data-cy=comments_context]').first().click()
			.wait(500)
			.get('[data-cy=share_whatsapp]').first().should('be.visible')
			.get('[data-cy=share_twitter]').first().should('be.visible')
			.get('[data-cy=share_facebook]').first().should('be.visible')
	})

	it('Testar share twitter', () => {
		cy.visit(slug)
			.get('[data-cy=comments_context]').first().click()
			.wait(500)
			.get('[data-cy=share_twitter]').first().click()
	})

	it('Testar share facebook', () => {
		cy.visit(slug)
			.get('[data-cy=comments_context]').first().click()
			.wait(500)
			.get('[data-cy=share_facebook]').first().click()
	})

	it('Testar share whatsapp', () => {
		cy.visit(slug)
			.get('[data-cy=comments_context]').first().click()
			.wait(500)
			.get('[data-cy=share_whatsapp]').first().click()
	})
})
