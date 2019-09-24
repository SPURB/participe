describe('API Headers', () => {
	let VUE_APP_API_URL
	let apiVersion

	before(() => {
		VUE_APP_API_URL = Cypress.env('VUE_APP_API_URL')
		apiVersion = Cypress.env('apiVersion')
	})

	it('Loga variáveis de ambiente', () =>{
		cy.log(VUE_APP_API_URL)
		cy.log(apiVersion)
	})

	it('Retorna content-type JSON', () => {
		cy.request(`${VUE_APP_API_URL}${apiVersion}/consultas`)
			.its('headers')
			.its('content-type')
			.should('include', 'application/json')
	})

	it('Retorna número correto de consultas a partir da tabela "consultas"', () => {
		cy.request(`${VUE_APP_API_URL}${apiVersion}/consultas`)
			.its('body')
			.then(body => {
				expect(Object.prototype.toString.call( body ) === '[object Array]').to.equal(true, 'Requisição retorna um array')
				expect(body.length > 10).to.equal(true, 'Requisição retorna mais que 10 itens')
			})
	})

})
