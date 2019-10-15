// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
	it('Existe h1 com substring "participe"', () => {
		cy.visit('/arco-tiete')
			.get('.PageTop')
			.should('contain','PIU Arco Tietê')
	})
})
