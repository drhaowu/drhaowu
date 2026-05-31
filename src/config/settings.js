export const settings = {
	// Site
	site: {
		title: 'Dr Hao Wu',
		description: 'Personal website of Dr Hao Wu',
		base: '/',
		trailingSlash: false,
		language: 'en',
	},
	// Author
	author: {
		name: 'Dr Hao Wu',
		avatar: '/assets/images/home/classic-hero.jpg',
		status: '👨‍💻',
		bio: 'Researcher and builder',
		metadata: [
			{
				text: 'GitHub',
				link: 'https://github.com/casperwu',
			},
		],
	},
	// Navigation
	nav: [
		{
			text: 'Home',
			link: '/',
		},
		{
			text: 'About',
			link: '/company/about',
		},
		{
			text: 'Work',
			link: '/blog',
		},
		{
			text: 'Contact',
			link: '/company/contact',
		},
	],
	// Search
	search: {
		enabled: true,
		type: 'google', // google | algolia
		placeholder: 'Search...',
		algoliaAppId: '',
		algoliaSearchKey: '',
		algoliaAdminKey: '',
	},
	// Sidebar
	sidebar: {
		enabled: true,
		position: 'right', // left | right
		items: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'About',
				link: '/company/about',
			},
			{
				text: 'Work',
				link: '/blog',
			},
			{
				text: 'Contact',
				link: '/company/contact',
			},
		],
	},
	// Footer
	footer: {
		enabled: true,
		text: 'Dr Hao Wu',
	},
	// Social
	social: [
		{
			name: 'GitHub',
			icon: 'mdi:github',
			link: 'https://github.com/casperwu',
		},
	],
};
