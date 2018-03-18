const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	exportPathMap: () => ({
		'/': { page: '/' }
	}),

	webpack: config => {
		config.module.rules.push({
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			options: {
				publicPath: '../',
				name: 'static/fonts/[hash].[ext]',
				limit: 10000
			}
		});
		config.module.rules.push({
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader',
			options: {
				publicPath: '../',
				name: 'static/fonts/[hash].[ext]',
				limit: 10000
			}
		});
		return config;
	},
	// Perform customizations to webpack config
	// Important: return the modified config

	// Perform customizations to webpack dev middleware config
	// Important: return the modified config
	webpackDevMiddleware: config => config
});
