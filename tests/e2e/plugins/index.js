require('dotenv').config({ path: '.env.development.local' })

module.exports = (on, config) => {
	config.env = process.env
	config.env.apiVersion = 'v2'

	return config
}