const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	transpileDependencies: ['vuetify'],
	chainWebpack: config => {
		config.module
			.rule('pdf')
			.test(/\.(pdf)(\?.*)?$/)
			.use('file-loader')
			.loader('file-loader')
			.options({
				name: 'public/diplomes/[name].[hash:8].[ext]',
			});
	},
	configureWebpack: {
		optimization: {
			minimize: true,
			minimizer: isProd
				? [
						new TerserPlugin({
							terserOptions: {
								compress: {
									drop_console: true,
								},
								output: {
									comments: false,
								},
							},
						}),
				  ]
				: [],
		},
	},
};
