// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
	it('Existe h1 com substring "participe"', () => {
		cy.seedAndVisit()
			.get('h1')
			.should('contain','participe')
	})

	it('Número de consultas na DOM é o mesmo dos elementos array da resposta da API (tabela "consultas")', () => {
		let nConsultas
		let nConsultasDOM = 0

		cy.seedAndVisit()
			.then(res => nConsultas = res.response.body.length)
			.get('section.abertas').children('ul').children('li')
			.then(itens => nConsultasDOM = nConsultasDOM + itens.length)
			.get('section.encerradas').children('ul').children('li')
			.then(itens => nConsultasDOM = nConsultasDOM + itens.length )
			.should(() => expect(nConsultas === nConsultasDOM).to.equal(true, 'Há mesmo número de itens na API e nas listas da DOM (soma de abertas e encerradas)'))
	})
})
