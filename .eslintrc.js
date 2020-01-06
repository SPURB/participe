module.exports = {
  root: false,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': [1, 'tab'],
		'no-tabs': 0,
		'no-irregular-whitespace': 0,
		'vue/require-v-for-key': 0,
		'no-array-constructor': 0,
		'camelcase': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
