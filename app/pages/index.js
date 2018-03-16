import { Component } from 'react';
import Router from 'next/router';

import { pages } from '../../app.config';

// TODO: Will eventually have an assortment of things on the Home Page.
// For now, we are just redirecting to the Portfolio Page.
export class HomePage extends Component {
	static async getInitialProps({ res }) {
		if (res) {
			res.writeHead(302, {
				Location: pages.portfolio.route.href
			});
			res.end();
			res.finished = true;
		} else {
			Router.replace(pages.portfolio.route.href);
		}
		return {};
	}
}

export default HomePage;
