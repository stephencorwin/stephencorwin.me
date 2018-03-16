module.exports = {
	exportPathMap: () => ({
		'/': { page: '/' }
	}),

	webpack: config => config,
	// Perform customizations to webpack config
	// Important: return the modified config

	// Perform customizations to webpack dev middleware config
	// Important: return the modified config
	webpackDevMiddleware: config => config
};
