import { Component } from 'react';
import Router from 'next/router';

import { contact } from '../../app.config';

// TODO: Will eventually have an assortment of things on the Home Page.
// For now, we are just redirecting to the GitHub Repository.
export class ResumePage extends Component {
	static async getInitialProps({ res }) {
		if (res) {
			res.writeHead(302, {
				Location: `${contact.github.href}/resume`
			});
			res.end();
			res.finished = true;
		} else {
			Router.replace(`${contact.github.href}/resume`);
		}
		return {};
	}
}

export default ResumePage;
