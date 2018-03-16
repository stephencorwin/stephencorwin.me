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
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		const { styleTags } = this.props;
		return (
			<html lang="en-US">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="author" content={pkg.author} />

					{styleTags}

					<link rel="shortcut icon" type="image/x-icon" href={config.favicon} />
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
						rel="stylesheet"
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
