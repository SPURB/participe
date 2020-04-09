describe('Teste unitário para o component modal do ThreadComments', () => {

    const slug = '/governo-aberto' // Variavel para mudar a slug do teste

    it('Testar share whatsapp', () => {
        cy.visit(slug)
        cy.get('[data-cy=share_whatsapp]').first().click()
    })

    it('Testar share twitter', () => {
        cy.visit(slug)
        cy.get('[data-cy=share_twitter]').first().click()
    })

    it('Testar share facebook', () => {
        cy.visit(slug)
        cy.get('[data-cy=share_facebook]').first().click()
    })
})
