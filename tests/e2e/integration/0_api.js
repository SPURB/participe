describe('API', () => {
	it('Retorna content-type JSON', () => {
		cy.request(`${Cypress.env('VUE_APP_API_URL')}${Cypress.env('apiVersion')}/consultas`)
			.its('headers')
			.its('content-type')
			.should('include', 'application/json', 'Header consta "content-type: application/json"')
	})

	it('Retorna número correto de consultas a partir da tabela "consultas"', () => {
		cy.request(`${Cypress.env('VUE_APP_API_URL')}${Cypress.env('apiVersion')}/consultas`)
			.its('body')
			.then(body => {
				expect(Object.prototype.toString.call(body) === '[object Array]').to.equal(true, 'Requisição retorna um array')
				expect(body.length > 10).to.equal(true, 'Há mais que 10 itens no array')
			})
	})
})
