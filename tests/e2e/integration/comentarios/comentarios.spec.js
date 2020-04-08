describe('Teste unitário para o component comentarios', () => {

    const slug = 'arco-tiete-2' // Variavel para mudar a slug do teste

    it('Testar erro de Nome, E-mail e Sobrenome vazios', () => {
        cy.visit(slug)

        // get element
        cy.get('[data-cy=open_coment]').first().click()
        cy.get('[data-cy=input_coment]').first().type('Teste')

        // submit form
        cy.get('[data-cy=submit_coment]').first().click()

        // verifica erro emitido
        cy.get('[data-cy=alert_component]').contains('Preencha corretamente os campos Nome e Email')
    })

    it('Testar erro de INCLUA O NOME', () => {
        cy.visit(slug)

        // .first() = Pega o primeiro elemento da DOM que possui o bind selecionado 
        
        // get element

        cy.get('[data-cy=open_coment]').first().click()
        cy.get('[data-cy=input_surname]').first().type('Dantas')
        cy.get('[data-cy=input_organization]').first().type('SPUrbanismo')
        cy.get('[data-cy=input_email]').first().type('mauricio@gmail.com')
        cy.get('[data-cy=input_coment]').first().type('Teste')

        // submit form
        cy.get('[data-cy=submit_coment]').first().click()

        cy.get('[data-cy=alert_component]').contains('Inclua seu nome')
    })

    it('Testar erro de INCLUA O SOBRENOME', () => {
        cy.visit(slug)

        // get element
        cy.get('[data-cy=open_coment]').first().click()
        cy.get('[data-cy=input_name]').first().type('Maurício')
        cy.get('[data-cy=input_organization]').first().type('SPUrbanismo')
        cy.get('[data-cy=input_email]').first().type('mauricio@gmail.com')
        cy.get('[data-cy=input_coment]').first().type('Teste')

        // submit form
        cy.get('[data-cy=submit_coment]').first().click()

        // verifica erro emitido
        cy.get('[data-cy=alert_component]').contains('Inclua seu sobrenome')
    })

    it('Testar erro de CORRIJA SEU E-MAIL', () => {
        cy.visit(slug)

        // get element
        cy.get('[data-cy=open_coment]').first().click()
        cy.get('[data-cy=input_name]').first().type('Maurício')
        cy.get('[data-cy=input_surname').first().type('Dantas')
        cy.get('[data-cy=input_organization]').first().type('SPUrbanismo')
        cy.get('[data-cy=input_coment]').first().type('Teste')

        // submit form
        cy.get('[data-cy=submit_coment]').first().click()

        // verifica erro emitido
        cy.get('[data-cy=alert_component]').contains('Corrija seu e-mail')
    })

    it('Testar erro de INCLUA O SEU COMENTÁRIO', () => {
        cy.visit(slug)

        // get element
        cy.get('[data-cy=open_coment]').first().click()
        cy.get('[data-cy=input_name]').first().type('Maurício')
        cy.get('[data-cy=input_surname').first().type('Dantas')
        cy.get('[data-cy=input_organization]').first().type('SPUrbanismo')
        cy.get('[data-cy=input_email]').first().type('mauricio@gmail.com')

        // submit form
        cy.get('[data-cy=submit_coment]').first().click()

        // verifica erro emitido
        cy.get('[data-cy=alert_component]').contains('Inclua seu comentário')
    })
})