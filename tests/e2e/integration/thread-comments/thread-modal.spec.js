describe('Teste unitário para o component modal do ThreadComments', () => {

    const slug = '/governo-aberto/comentarios/1' // Variavel para mudar a slug do teste

    it('Testar load modal', () => {
        cy.visit(slug)
    })

    it('Testar close modal', () => {
        cy.visit(slug)
        
        // get element
        cy.get('[data-cy=close_modal]').click()
    })
})
