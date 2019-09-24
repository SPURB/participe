// https://docs.cypress.io/api/introduction/api.html

describe('Vista a home', () => {
	it('Verifica se existe h1 com título "participe"', () => {
		cy.visit('/')
			.get('h1')
			.should('contain','participe')
			.then(()=> {
				cy.log(Cypress.env('VUE_APP_API_URL'))
			})
	})
})
