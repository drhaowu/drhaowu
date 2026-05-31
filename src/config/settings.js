export const settings = {
	// Site
	site: {
		title: "Mapping Hao's Research",
		description: 'A bilingual (English/Chinese) interactive map of research projects across digital technology, migration, education, queer spaces, and AI.',
		base: '/',
		trailingSlash: false,
		language: 'en',
	},
	// Author
	author: {
		name: 'Dr Hao Wu',
		avatar: '/assets/images/home/classic-hero.jpg',
		status: '👨‍💻',
		bio: 'Mapping digital lives, spaces, and identities across places | 数字生活、空间与身份的研究地图',
		metadata: [
			{
				text: 'GitHub',
				link: 'https://github.com/casperwu',
			},
			{
				text: 'EN | 中文',
				link: '/zh',
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
			text: 'Research Map',
			link: '/research-map',
		},
		{
			text: 'Projects',
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
				text: 'Research Map',
				link: '/research-map',
			},
			{
				text: 'Projects',
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
		text: "Mapping Hao's Research",
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
