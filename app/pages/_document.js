import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import globalStyles from '../styles/global.styles';
import config from '../../app.config';
import pkg from '../../package.json';

// injectGlobalStyles
globalStyles();

export default class MyDocument extends Document {
	static async getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		const { styleTags } = this.props;
		return (
			<html lang="en-US">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta name="author" content={pkg.author} />
					<meta
						name="google-site-verification"
						content="4Mg1rWlMPCXNgG3n4tVLQVZvu96tOLb6U05sqeIkI6k"
					/>

					{styleTags}

					<link rel="shortcut icon" type="image/x-icon" href={config.favicon} />
					<link rel="stylesheet" href="/_next/static/style.css" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:r,b"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
