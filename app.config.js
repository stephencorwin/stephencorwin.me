export const contact = {
	phone: {
		icon: 'fa fa-phone-square',
		label: '919.478.1889',
		href: 'tel:9194781889'
	},
	email: {
		icon: 'fa fa-envelope-square',
		label: 'stephenjcorwin@gmail.com',
		href: 'mailto:stephenjcorwin@gmail.com'
	},
	linkedin: {
		icon: 'fa fa-linkedin-square',
		label: 'stephenjcorwin',
		href: 'https://linkedin.com/in/stephenjcorwin/'
	}
};

export const pages = {
	home: {
		route: {
			href: '/',
			label: 'home',
			title: 'Stephen Corwin',
			description: ''
		}
	},
	portfolio: {
		route: {
			href: '/portfolio',
			label: 'portfolio',
			title: 'Stephen Corwin | Portfolio',
			description: ''
		},
		items: [
			{
				slug: 'my-project-1',
				label: 'My Project 1',
				description: `
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				`,
				image:
					'https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=='
			},
			{
				slug: 'my-project-2',
				label: 'My Project 2',
				description: `
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				`,
				image:
					'https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=='
			},
			{
				slug: 'my-project-3',
				label: 'My Project 3',
				description: `
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				`,
				image:
					'https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=='
			}
		]
	},
	resume: {
		route: {
			href: '/resume',
			label: 'resume',
			title: 'Stephen Corwin | Resume',
			description: ''
		}
	}
};

export default {
	title: 'Stephen Corwin',
	description: `
		A personal website with the intent of displaying past achievements, projects, and blog posts.
	`,
	logo: '/static/images/logo_full-color.svg',
	favicon: '/static/icons/favicon.ico',
	pages,
	navigation: [
		pages.portfolio.route,
		pages.resume.route,
		{
			href: 'http://github.com/stephencorwin/',
			label: 'open source',
			title: 'Stephen Corwin | Open Source',
			description: ''
		},
		{
			href: 'https://scorewin.com/',
			label: 'ScoreWin',
			title: 'Stephen Corwin | ScoreWin',
			description: ''
		}
	],
	contact
};
