export const settings = {
	// Site — public launch: Home only
	site: {
		title: 'DR HAO WU',
		description: 'DR HAO WU — personal site.',
		base: '/',
		trailingSlash: false,
		language: 'en',
	},
	author: {
		name: 'DR HAO WU',
		avatar: '/assets/images/avatar.png',
		status: '',
		bio: 'DR HAO WU — personal site.',
		metadata: [],
	},
	// Navigation — empty while other pages live in /other
	nav: [],
	search: {
		enabled: false,
		type: 'google',
		placeholder: 'Search...',
		algoliaAppId: '',
		algoliaSearchKey: '',
		algoliaAdminKey: '',
	},
	sidebar: {
		enabled: false,
		position: 'right',
		items: [],
	},
	footer: {
		enabled: false,
		text: 'DR HAO WU',
	},
	social: [
		{
			name: 'GitHub',
			icon: 'mdi:github',
			link: 'https://github.com/casperwu',
		},
	],
};
