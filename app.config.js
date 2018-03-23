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
				slug: 'holiday-retirement',
				label: 'Holiday Retirement Art Portal',
				client: 'The Tiber Group',
				description: '',
				startDate: '',
				endDate: '',
				references: [],
				tags: ['node.js', 'angular-2', 'sass'],
				images: ['/static/portfolio/holiday-retirement/logo.png']
			},
			{
				slug: 'gulp-dashboard',
				label: '@stephencorwin/gulp-dashboard',
				client: 'Personal',
				description: 'A dashboard for displaying the status of tasks.',
				startDate: '',
				endDate: '',
				references: [],
				tags: ['gulp', 'npm'],
				images: ['/static/logos/third-party/gulp.png']
			},
			{
				slug: 'sass-core',
				label: '@stephencorwin/sass-core',
				client: 'Personal',
				description:
					'SASS framework which implements generators, constructors, and modules.',
				startDate: '',
				endDate: '',
				references: [],
				tags: ['sass', 'npm'],
				images: ['/static/logos/third-party/sass.png']
			},
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
				description: `
					Millennial Media has an ongoing campaign codenamed "Move With Mobile". The idea is that customer's move between devices and so should the advertising targeting them. Millennial Media is involved in over 100 events each year world wide and needed a website to house the information regarding these events. In addition, we also wanted an interactive feed page that would aggregate content from various social media platforms in an automatic, but moderated fashion.
					I was tasked with the creation of the website with assistance from our creative director. I chose to use SilverStripe as the Content Management System. Utilizing tools such as Grunt, SASS, and SilverStripe, I implemented optimizations to minimize the load time for each page. SilverStripe has a feature that dynamically resamples images to the maximum resolution in which they could possibly be displayed. This is done without altering or distorting the original image.
					The website was a fun challenge. The team and I are very satisfied with how the website turned out and have big plans for the second iteration.
				`,
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
				description: `
					ZM Financial Systems Inc has several manuals that are in either PDF or Microsoft Word format. This has made it difficult for them to edit and style their content since many of their documents are over 200 pages. I was tasked with the conversion of two of these manuals into a structured database.
					I started out by analyzing the documents and noted what types of elements where present. There where tables, images, lists, etc. The first document was in PDF. I used the automatic conversion tool that Adobe has provided to export the PDF as a HTML document. This would allow me access to all of the content including what styling was already done as well as basic structure.
					We decided to use the SilverStripe Content Management System to organize our data. I went through the process of setting up a basic SilverStripe site. This included creating data models that had representational arrays which SilverStripe uses to create a relational database.
					Using Sublime Text, I searched through the document and found a few patterns. Each section would always begin and end with the same sequences. There was usually a bookmark ID associated as well. I used regular expressions to strip any in-line styling that Adobe has automatically added. This would let me style all the content in a uniform way, later on. Now that the content was purely text and structure, I developed a PHP script that utilized regular expressions to separate out all the sections. I then ran another PHP script to add these sections to the database.
					I then developed several SilverStripe templates that would access the data and bring it to the presentation layer. I used Syntactically Awesome Style Sheets (SASS) to produce Cascading Style Sheets (CSS) that replicated the design mockup which our graphic designer had produced.
					Due to the structure of the documents, I used jQuery to produce a navigation menu that would expand and contract to allow the user to maneuver throughout the manual. When clicking on a chapter, I would perform an AJAX request that retrieved the chapter data if necessary. It would then call a method that used jQuery.ScrollTo to scroll through the content to the appropriate section. This produced a nice seamless effect that was easier on the eyes then just jumping to the new section. In my AJAX request, I was caching the results so that after the first request, it would load much faster. During the load time, I also used a loading spinner.
					The client also wanted a search feature. This search would not only search the current content, but the entire manual and highlight both sections and the words the user had specified.
					I then repeated the same process for the second document.
					The website ended up having a nice feel to it. It was both intuitive and functional - exactly what the client wanted. This project was a great opportunity to practice using regular expressions to sift through data. I can see myself using these often in future projects increase productivity.
					This project serves as a reminder that for a product to be great, it doesn't need to be complex; it just needs to serve its purpose to fullest extent it can.
				`,
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
				description: `
					The Pavonis Group is a german real-estate company that was making plans to build many offices in various locations. They wanted to have a 3D representation of the offices and their campuses prior to building them. This would allow them to presale offices. To prepare for this endeaver, they needed a company that could provide their 3D simulation needs. The Pavonis Group decided to do a trial run with several agencies to test out which one they wanted to do longterm business with. I was currently workng at BLDG-25 at the time.
					Our task was to take the blueprints of a proposed office layout for the island of Wohndebauung Eiswerder Berlin and create the scene virtually in a game engine. Branding was also encouraged. The kicker was that we only had a week and a half to do it.
					I was placed into a team of four consisting of a graphics designer, two 3D specialists, and myself as the game/ux programmer. We chose to use the Unity 3D engine because I was already familiar with it from my previous projects. This engine is great for a putting together a project very quickly.
					We started out by discussing features that we wanted to include. This was a pitch directly relaying our ability to think creatively and execute on a strict timeline. After some debate, we decided to go with a simple branding theme that would implement some user interaction by taking advantage of the game engine we were using. Our 3D specialists would divide the work and crank out as many models as possible within our timeframe. It was decided that we would only demonstrate the penthouse suite for the interior and then focus on the exterior. The idea was that if we can get one interior very detailed, it would demonstrate the quality; but we wanted a sexy exterior camera view to open up on.
					I started out by implementing a simple first person controller pawn. After some thought, we decided to limit camera rotation to being only horizontal. If the user was able to freely look around, it was possible that they would be disoriented and end up facing a wall or ceiling. Still allowing them horizontal camera freedom in combination with WASD movement would still provide them with a fair amount of mobility while reducing the learning curve of using this tool. I used the screen dimensions to determine if the user's cursor was close to the edge of either side of the screen. If it was, it would start panning the camera.
					Afterwards, I created a branding HUD (heads-up-display) that would hold their branding as well as allow the user some interaction. The HUD included several pages which were toggleable in addition to the company logo and current location information. I implemented a point of interest system using Unity Prefabs. I would place one of my POI Prefabs near an area such as the courtyard, garden, or beach. The Prefab would then expose itself to the HUD and provide itself as a choice. If the user were to click on this choice, it would teleport their pawn to the location. This provided a really cool interaction that allowed the user to quickly navigate to exactly where they wanted to investigate. He would still have the option to manually walk to the location, but this provided a direct route.
					By this time, there were a good amount of models already created. I started organizing them and placing them in the virtual world. I had to make sure that they looked as natural as possible.
					Lighting was a real challenge for this project. It was my first experience with placing lights and baking ambient light into the textures. I only had a few day to figure out the advanced lighting details.
					In the end, we had a thorough simulation experience. I was happy with the level of interaction that was provided to the user. The interior was finished, however the exterior buildings were not fully textured in time. If we had more time a higher quality exterior could have been achieved.
					In hindsight, I wish I had spent more time on lighting as it is the most obvious way to improve the visual quality and feel of a simulation.
					The Pavonis Group was impressed with the amount that was achieved in such a short amount of time. Our competitors did not take the branding approach. The Pavonis Group really liked this approach and applauded our creativity.
				`,
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
				description: `
					Located in Norfolk, Virginia, the museum Nauticus plays host to the US Wisconsin. The battleship was decommissioned on September 30, 1991. The battleship now acts as a museum on the water where patrons can walk through segments of the battleship and take a guided tour.
					Due to the nature of the battleship, not all patrons were able to maneuver the bowels the ship. Patrons with disabilities were especially at a loss because it is virtually impossible to get a wheelchair inside the ship. To accommodate the disabled, my team was tasked with the created of a virtual simulation of the inside of the US Wisconsin. This simulation would be pseudo-realistic and enable the disabled to experience the tour route virtually. The client wanted the simulation to be hosted in a kiosk fashion where the user would interact with a touchscreen monitor.
					First, we acquired schematics of the battleship and familiarized ourselves with the layout. We took pictures and videos and organized them by key rooms they were located. Afterwards, we cross-referenced the objects and eliminated any overlap. For example, there are many chairs and beds that look exactly the same, so we only need to create one 3D model to represent it.
					I was the only programmer on this project and was assisted by three others who mainly dealt with 3D modeling and project management. I started out the project by prototyping a way point navigation system. The client did not want the user to have total control over where they were going because many of the users may not have experience in a game-like environment. Restricting the movement to being automated while allowing the user to still select a destination ensured that the user would never end up "lost", facing an empty ceiling, or stuck. The navigation system would act similar to a router. Whenever a destination was selected, the end goal was carried almost like a header on a packet. When the user would reach a new way point, the system would check its end goal destination against the current way point's routes. The system would then direct the player to move automatically to the next correct way point. This process would repeat until the way point the user was currently matched the end goal destination that the user had selected, in which case the navigational HUD (Heads Up Display) would be re-enabled for the user to either look around or make a new selection. I also developed a point of interest component where if the user were to click on a tagged object, an informational menu would pop up explaining the use and history of the object in question.
					During the project, there were several lapses of time where the programming was ahead of the modeling process. I used the online tutorial resource,  <a title="lynda" href="http://www.lynda.com" target="_blank">www.lynda.com</a>, to familiarize myself with 3D modeling so that I would be able to assist my team. There was around 300 models that needed to be sculpted and textured, so any assistance that I could provide would help ensure that we met deadline.
					The team and I worked many late nights, but managed to create a product that was above expectations. Two of my team member were particularly partial to this project because they were former Navy. They wanted to make sure we did this project justice even if it meant a few sleepless nights. The kiosk was a success to the patrons and for first time, the disabled were able to experience the US Wisconsin instead of just waiting for their family members to finish having all the fun.
					This project was really intense, but I really enjoyed how we used the Unity3D game engine to bring a historic piece to life virtually. The virtual tour is available for viewing at the Nauticus Museum in Norfolk, Virginia.
				`,
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
		// {
		// 	href: 'https://github.com/stephencorwin/resume',
		// 	label: 'Resume',
		// 	title: 'Stephen Corwin | Resume',
		// 	description: '',
		// 	target: '_blank'
		// },
		{
			href: 'https://github.com/stephencorwin/',
			label: 'Open Source',
			title: 'Stephen Corwin | Open Source',
			description: '',
			target: '_blank'
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
				textTransform: 'none',
				WebkitFontSmoothing: 'antialiased',
				MozOsxFontSmoothing: 'grayscale'
			},
			target: '_blank'
		}
	],
	contact
};
