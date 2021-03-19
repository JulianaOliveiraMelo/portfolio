module.exports = {
	transpileDependencies: ["vuetify"],
	chainWebpack: config => {
		config.module
			.rule("pdf")
			.test(/\.(pdf)(\?.*)?$/)
			.use("file-loader")
			.loader("file-loader")
			.options({
				name: "public/diplomes/[name].[hash:8].[ext]"
			});
	}
};
