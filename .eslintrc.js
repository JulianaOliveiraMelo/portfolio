module.exports = {
	root: true,
	env: {
		// this section will be used to determine which APIs are available to us
		// (i.e are we running in a browser environment or a node.js env)
		node: true,
		browser: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
		// specifying a module sourcetype prevent eslint from marking import statements as errors
		sourceType: 'module',
	},
	extends: [
		// use the recommended rule set for both plain javascript and vue
		'eslint:recommended',
		'plugin:vue/recommended',
		// 'plugin:vue/base',
		'prettier',
	],
	rules: {
		// we should always disable console logs and debugging in production
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'vue/attribute-hyphenation': [
			'error',
			'never',
			{
				ignore: ['enter-active-class', 'leave-active-class', 'enter-to-class'],
			},
		],
		'vue/no-irregular-whitespace': [
			1,
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		'no-irregular-whitespace': [
			1,
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		// 	'vue/html-closing-bracket-newline': [
		// 		'error',
		// 		{
		// 			singleline: 'never',
		// 			multiline: 'always',
		// 		},
		// 	],
		// 	'vue/max-attributes-per-line': [
		// 		'error',
		// 		{
		// 			singleline: 1,
		// 			multiline: 1,
		// 			allowFirstLine: true,
		// 		},
		// 	],
		// 	'vue/html-self-closing': [
		// 		'error',
		// 		{
		// 			html: {
		// 				void: 'never',
		// 				normal: 'always',
		// 				component: 'always',
		// 			},
		// 			svg: 'always',
		// 			math: 'always',
		// 		},
		// 	],
		// 	'vue/script-indent': ['error', 2, { baseIndent: 1 }],
		// },
		// overrides: [
		// 	{
		// 		files: ['*.vue'],
		// 		rules: {
		// 			indent: 'off',
		// 		},
	},
	// ],
};
