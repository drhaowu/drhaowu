export type PortfolioCard = {
	slug: string;
	number: string;
	title: string;
	chinese: string;
	shortDescription: string;
	image: string;
	imageAlt: string;
	icon?: string;
	accent: string;
};

export type PortfolioDetail = PortfolioCard & {
	tagline: string;
	intro: string;
	keywords: string[];
	sections: Array<{
		eyebrow: string;
		title: string;
		copy: string;
		image?: string;
		imageAlt?: string;
		imageClass?: string;
		list?: string[];
	}>;
};

export const portfolioCards: PortfolioCard[] = [
	{
		slug: 'visual-design',
		number: '01',
		title: 'Visual Design',
		chinese: '视觉设计',
		shortDescription: 'Platform-adaptive visuals',
		image: 'visual-design.png',
		imageAlt: 'A collage of visual design examples',
		icon: 'visual-icon.svg',
		accent: '#ffb273',
	},
	{
		slug: 'video-production',
		number: '02',
		title: 'Video Production',
		chinese: '视频生产',
		shortDescription: 'Knowledge-driven short videos',
		image: 'video-production.png',
		imageAlt: 'A knowledge-driven short video example',
		icon: 'video-icon.svg',
		accent: '#ff8f70',
	},
	{
		slug: 'media-research',
		number: '03',
		title: 'Media + Research',
		chinese: '媒体与研究',
		shortDescription: 'Media–research integration',
		image: 'media-research.png',
		imageAlt: 'The Hong Kong Experience Project cover',
		icon: 'visual-icon.svg',
		accent: '#9bdccd',
	},
];

export const portfolioDetails: Record<string, PortfolioDetail> = {
	'visual-design': {
		...portfolioCards[0],
		tagline: 'Design that moves with the platform.',
		intro: 'I create visual systems that can travel across social media, long-form graphics, websites and H5 campaigns without losing their character.',
		keywords: ['Platform adaptation', 'Visual storytelling', 'Public-facing design'],
		sections: [
			{
				eyebrow: 'Design background',
				title: 'One idea, many screens.',
				copy: 'With the diversification of media platforms, a single-format social graphic can no longer meet the demand for different media forms. My practice moves from standardised templates towards more intentional visual systems.',
			},
			{
				eyebrow: 'A visual workflow',
				title: 'Build once. Adapt with purpose.',
				copy: 'I use a slicing approach so that one graphic piece can be distributed across multiple platforms, such as Xiaohongshu, Weibo, websites and H5 campaign pages.',
				list: ['Platform-adaptive visuals', 'Cross-platform user engagement', 'Long-form graphics for public communication'],
				image: 'visual-design.png',
				imageAlt: 'Visual design examples arranged as a colourful collage',
				imageClass: 'detail-media--visual',
			},
		],
	},
	'video-production': {
		...portfolioCards[1],
		tagline: 'Knowledge, told clearly.',
		intro: 'I turn research, travel and everyday questions into short, human-paced stories that are easy to understand and difficult to forget.',
		keywords: ['Research-led video', 'Short-form storytelling', 'Audience engagement'],
		sections: [
			{
				eyebrow: 'The starting point',
				title: 'A question is already a story.',
				copy: 'While working across media and research, I became interested in the distance between complex knowledge and the way people encounter it in daily life. Short video is a way to close that distance.',
			},
			{
				eyebrow: 'Specific examples',
				title: 'Make the useful thing watchable.',
				copy: 'From scripting and filming to editing and publishing, each video is shaped around one clear question, one memorable visual idea and a pace that respects the viewer.',
				list: ['Knowledge-driven short videos', 'High engagement on trending charts', 'A repeatable research-to-script workflow'],
				image: 'video-production.png',
				imageAlt: 'A short video about studying in the UK',
				imageClass: 'detail-media--video',
			},
		],
	},
	'media-research': {
		...portfolioCards[2],
		tagline: 'Research that travels through media.',
		intro: 'I combine media practice and academic research to make cultural projects public, accessible and memorable.',
		keywords: ['Media–research integration', 'Documentary production', 'Cultural storytelling'],
		sections: [
			{
				eyebrow: 'A connected practice',
				title: 'Research is not just behind the work.',
				copy: 'The research process shapes the question, the structure and the form. Media then becomes a public-facing way to invite people into that thinking.',
			},
			{
				eyebrow: 'Selected projects',
				title: 'From documentary to public experience.',
				copy: 'Projects include AHRC-funded documentary production and The Hong Kong Experience Project: different formats, connected by a commitment to cross-cultural understanding.',
				list: ['Media–research integration', 'AHRC-funded documentary production', 'The Hong Kong Experience Project'],
				image: 'media-research.png',
				imageAlt: 'The Hong Kong Experience Project cover',
				imageClass: 'detail-media--research',
			},
		],
	},
};
