module.exports = {
	plugins: ['cypress'],
	env: {
		mocha: true,
		'cypress/globals': true
	},
	rules: {
		'indent': [1, 'tab'],
		'no-tabs': 0,
		'no-irregular-whitespace': 0,
		'vue/require-v-for-key': 0,
		'no-array-constructor': 0,
		'camelcase': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
