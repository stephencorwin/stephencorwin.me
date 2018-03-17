import { colors, fontFamilies, fontSizes } from './app/styles/theme.styles';

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
		href: 'https://linkedin.com/in/stephenjcorwin'
	},
	github: {
		icon: 'fa fa-github-square',
		label: 'stephencorwin',
		href: 'https://github.com/stephencorwin'
	},
	twitter: {
		icon: 'fa fa-twitter-square',
		label: 'stephenjcorwin',
		href: 'https://twitter.com/stephenjcorwin'
	}
};

export const pages = {
	home: {
		route: {
			href: '/',
			label: 'Stephen Corwin',
			title: 'Stephen Corwin',
			description: ''
		}
	},
	portfolio: {
		route: {
			href: '/portfolio',
			label: 'Portfolio',
			title: 'Stephen Corwin | Portfolio',
			description: ''
		},
		items: [
			{
				slug: 'metronaps-scheduling-ios-app',
				label: 'MetroNaps Scheduling IOS App',
				client: 'Millennial Media',
				description: '',
				startDate: '2014-09-01',
				endDate: '2014-10-01',
				references: [],
				tags: [
					'silverstripe',
					'css',
					'html',
					'sass',
					'typescript',
					'grunt',
					'php',
					'mysql'
				],
				images: [
					'/static/portfolio/metronaps-scheduling-ios-app/1.png',
					'/static/portfolio/metronaps-scheduling-ios-app/2.png',
					'/static/portfolio/metronaps-scheduling-ios-app/3.png',
					'/static/portfolio/metronaps-scheduling-ios-app/4.png',
					'/static/portfolio/metronaps-scheduling-ios-app/5.png',
					'/static/portfolio/metronaps-scheduling-ios-app/6.png',
					'/static/portfolio/metronaps-scheduling-ios-app/7.png',
					'/static/portfolio/metronaps-scheduling-ios-app/8.png',
					'/static/portfolio/metronaps-scheduling-ios-app/9.png',
					'/static/portfolio/metronaps-scheduling-ios-app/10.png'
				]
			},
			{
				slug: 'moonlighting',
				label: 'Moonlighting',
				client: 'Moonlighting LLC',
				description:
					'Moonlighting, LLC required a new website to channel downloads to their latest app. I was brought on board as a third-party contractor to assist in the creation and deployment of the website. Working alongside the in-house development team, I realized photoshop mockups via HTML5, jQuery, PHP, and CSS using WordPress as the Content Management System. The tricky part was through this process, three different web hosts were involved and required me to quickly learn their platforms for database administration and ftp deployment. After dissecting one of the web hosts, I realized that they did not allow .htaccess files. This proved to be an issue with permalinks in WordPress. The original web host refused to enable this feature on their servers and thus influenced the decision to switch hosts.',
				startDate: '2014-07-01',
				endDate: '2014-10-01',
				references: [{ type: 'online', path: 'http://moonlightingapp.com/' }],
				tags: ['wordpress', 'css', 'html', 'javascript', 'php'],
				images: [
					'/static/portfolio/moonlighting/1.png',
					'/static/portfolio/moonlighting/2.png',
					'/static/portfolio/moonlighting/3.png',
					'/static/portfolio/moonlighting/4.png',
					'/static/portfolio/moonlighting/5.png',
					'/static/portfolio/moonlighting/6.png',
					'/static/portfolio/moonlighting/7.png'
				]
			},
			{
				slug: 'movewithmobile',
				label: '#MOVEWITHMOBILE',
				client: 'Millennial Media',
				description: '',
				startDate: '2014-08-01',
				endDate: '2014-10-01',
				references: [{ type: 'online', path: 'http://movewithmobile.com/' }],
				tags: [
					'silverstripe',
					'css',
					'sass',
					'html',
					'javascript',
					'ajax',
					'php',
					'mysql'
				],
				images: [
					'/static/portfolio/movewithmobile/1.png',
					'/static/portfolio/movewithmobile/2.png',
					'/static/portfolio/movewithmobile/3.png',
					'/static/portfolio/movewithmobile/4.png',
					'/static/portfolio/movewithmobile/5.png'
				]
			},
			{
				slug: 'verizon-marketing-website',
				label: 'Verizon Marketing Website',
				client: 'Verizon',
				description: '',
				startDate: '2014-06-01',
				endDate: '2014-07-01',
				references: [
					{ type: 'online', path: 'http://precisionmarketinsight.com/' }
				],
				tags: ['wordpress', 'css', 'html', 'php', 'mysql'],
				images: [
					'/static/portfolio/verizon-marketing-website/1.png',
					'/static/portfolio/verizon-marketing-website/2.png',
					'/static/portfolio/verizon-marketing-website/3.png',
					'/static/portfolio/verizon-marketing-website/4.png',
					'/static/portfolio/verizon-marketing-website/5.png',
					'/static/portfolio/verizon-marketing-website/6.png'
				]
			},
			{
				slug: 'blue-cross-blue-shield-eclass-learning-platform',
				label: 'Blue Cross Blue Shield eClass Learning Platform',
				client: 'Blue Cross Blue Shield of Louisiana',
				description: '',
				startDate: '2013-10-01',
				endDate: '2014-01-01',
				references: [],
				tags: [
					'adobe-photoshop',
					'sass',
					'silverstripe',
					'css',
					'html',
					'php',
					'mysql'
				],
				images: [
					'/static/portfolio/blue-cross-blue-shield-eclass-learning-platform/1.png',
					'/static/portfolio/blue-cross-blue-shield-eclass-learning-platform/2.png',
					'/static/portfolio/blue-cross-blue-shield-eclass-learning-platform/3.png',
					'/static/portfolio/blue-cross-blue-shield-eclass-learning-platform/4.png',
					'/static/portfolio/blue-cross-blue-shield-eclass-learning-platform/5.png',
					'/static/portfolio/blue-cross-blue-shield-eclass-learning-platform/6.png'
				]
			},
			{
				slug: 'zm-financial-systems-online-manual',
				label: 'ZM Financial Systems Online Manual',
				client: 'ZM Financial Systems Inc.',
				description: '',
				startDate: '2013-12-01',
				endDate: '2013-12-01',
				references: [],
				tags: [
					'adobe-photoshop',
					'microsoft-office-suite',
					'sass',
					'silverstripe',
					'css',
					'html',
					'php',
					'mysql'
				],
				images: [
					'/static/portfolio/zm-financial-systems-online-manual/1.png',
					'/static/portfolio/zm-financial-systems-online-manual/2.png',
					'/static/portfolio/zm-financial-systems-online-manual/3.png',
					'/static/portfolio/zm-financial-systems-online-manual/4.png'
				]
			},
			{
				slug: 'html-and-flash-calculator',
				label: 'HTML and Flash Calculator',
				client: 'Capstrat',
				description: '',
				startDate: '2013-12-01',
				endDate: '2013-12-01',
				references: [],
				tags: ['git', 'html', 'css', 'adobe-flash'],
				images: [
					'/static/portfolio/html-and-flash-calculator/1.png',
					'/static/portfolio/html-and-flash-calculator/2.png',
					'/static/portfolio/html-and-flash-calculator/3.png',
					'/static/portfolio/html-and-flash-calculator/4.png'
				]
			},
			{
				slug: 'allied-world-class-reliability-analytics-visualizations',
				label: 'Allied World Class Reliability Analytics Visualizations',
				client: 'Allied World Class Reliability',
				description: '',
				startDate: '2013-09-01',
				endDate: '2013-11-01',
				references: [],
				tags: [
					'adobe-photoshop',
					'silverstripe',
					'css',
					'html',
					'javascript',
					'php',
					'mysql'
				],
				images: [
					'/static/portfolio/allied-world-class-reliability-analytics-visualizations/1.png',
					'/static/portfolio/allied-world-class-reliability-analytics-visualizations/2.png',
					'/static/portfolio/allied-world-class-reliability-analytics-visualizations/3.png',
					'/static/portfolio/allied-world-class-reliability-analytics-visualizations/4.png',
					'/static/portfolio/allied-world-class-reliability-analytics-visualizations/5.png',
					'/static/portfolio/allied-world-class-reliability-analytics-visualizations/6.png'
				]
			},
			{
				slug: 'university-of-virginia-health-system-website',
				label: 'University of Virginia Health System Website',
				client: 'University of Virginia Health System',
				description: '',
				startDate: '2013-10-01',
				endDate: '2013-10-01',
				references: [],
				tags: [
					'git',
					'grunt',
					'sass',
					'css',
					'wordpress',
					'php',
					'html',
					'mysql'
				],
				images: [
					'/static/portfolio/university-of-virginia-health-system-website/1.png',
					'/static/portfolio/university-of-virginia-health-system-website/2.png',
					'/static/portfolio/university-of-virginia-health-system-website/3.png',
					'/static/portfolio/university-of-virginia-health-system-website/4.png',
					'/static/portfolio/university-of-virginia-health-system-website/5.png',
					'/static/portfolio/university-of-virginia-health-system-website/6.png',
					'/static/portfolio/university-of-virginia-health-system-website/7.png'
				]
			},
			{
				slug: 'wohndebauung-eiswerder-berlin-virtual-simulation',
				label: 'Wohndebauung Eiswerder Berlin Virtual Simulation',
				client: 'The Pavonis Group',
				description: '',
				startDate: '2013-09-01',
				endDate: '2013-10-01',
				references: [],
				tags: ['c#', 'javascript', 'unity-3d', 'adobe-photoshop'],
				images: [
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/1.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/2.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/3.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/4.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/5.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/6.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/7.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/8.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/9.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/10.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/11.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/12.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/13.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/14.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/15.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/16.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/17.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/18.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/19.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/20.png',
					'/static/portfolio/wohndebauung-eiswerder-berlin-virtual-simulation/21.png'
				]
			},
			{
				slug: 'us-wisconsin-virtual-simulation',
				label: 'US Wisconsin Virtual Simulation',
				client: 'Nauticus',
				description: '',
				startDate: '2012-11-01',
				endDate: '2012-05-01',
				references: [],
				tags: ['c#', 'javascript', 'unity-3d', 'adobe-photoshop'],
				images: [
					'/static/portfolio/us-wisconsin-virtual-simulation/1.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/2.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/3.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/4.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/5.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/6.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/7.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/8.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/9.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/10.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/11.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/12.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/13.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/14.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/15.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/16.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/17.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/18.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/19.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/20.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/21.png',
					'/static/portfolio/us-wisconsin-virtual-simulation/22.png'
				]
			},
			{
				slug: 'vital-presence',
				label: 'Vital Presence',
				client: 'School Project',
				description: '',
				startDate: '2017-01-01',
				endDate: '2017-01-01',
				references: [
					{
						type: 'download',
						path: '/static/portfolio/vital-presence/vital-presence.zip'
					}
				],
				tags: ['adobe-photoshop', 'gamemaker'],
				images: [
					'/static/portfolio/vital-presence/1.png',
					'/static/portfolio/vital-presence/2.png',
					'/static/portfolio/vital-presence/3.png',
					'/static/portfolio/vital-presence/4.png',
					'/static/portfolio/vital-presence/5.png',
					'/static/portfolio/vital-presence/6.png',
					'/static/portfolio/vital-presence/7.png',
					'/static/portfolio/vital-presence/8.png',
					'/static/portfolio/vital-presence/9.png',
					'/static/portfolio/vital-presence/10.png'
				]
			}
		]
	},
	resume: {
		route: {
			href: '/resume',
			label: 'Resume',
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
			label: 'Open Source',
			title: 'Stephen Corwin | Open Source',
			description: ''
		},
		{
			href: 'https://scorewin.com/',
			label: 'ScoreWin',
			title: 'Stephen Corwin | ScoreWin',
			description: '',
			style: {
				color: colors.white,
				fontFamily: fontFamilies.scorewin,
				fontSize: fontSizes.md,
				textTransform: 'none'
			}
		}
	],
	contact
};
