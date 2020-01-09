const fs = require("fs")
const path = '.env.development.local'
require('dotenv').config({ path: path})

if (!fs.existsSync(path) && !process.env.CI) {
	throw new Error ('Testes e2e necessitam de arquivo ".env.development.local" na raiz do projeto. Solicite com SMDU ou SPUrbanismo.')
}

module.exports = (on, config) => {
	config.env = process.env
	config.env.apiVersion = 'v2'

	if (process.env.CI) {
		config.env.VUE_APP_API_URL='https://api.gestaourbana.prefeitura.sp.gov.br/'
	}
	return config
}
