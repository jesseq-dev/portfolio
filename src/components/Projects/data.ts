import imageSources from '~/image-sources';

const PROJECTS = [
	{
		name: 'PlayPopGo',
		links: ['https://playpopgo.com'],
		thumbnail: imageSources.projects['playpopgo'][2],
		images: imageSources.projects['playpopgo'],
		tags: ['NextJs', 'TailwindCSS', 'Typescript', 'Shopify'],
	},
	{
		name: 'Gorjs',
		links: ['https://gorjs.io'],
		thumbnail: imageSources.projects['gorjs'][5],
		images: imageSources.projects['gorjs'],
		tags: [
			'NextJs',
			'MUI',
			'Typescript',
			'NodeJs',
			'NestJs',
			'PostgreSql',
			'Blockchain',
			'Web3',
			'etherjs',
			'Moralis',
			'IPFS',
		],
	},
	{
		name: 'Sivo - Financial App',
		links: ['https://app.sivo.com'],
		thumbnail: imageSources.projects['sivo'][1],
		images: imageSources.projects['sivo'],
		tags: [
			'ReactJs',
			'MUI',
			'Typescript',
			'Prisma',
			'GraphQL',
			'NodeJs',
			'PostgreSql',
			'Playwright',
			'Jest',
			'Metabase',
		],
	},
	{
		name: 'Online Store',
		links: ['https://e-commerce-app-self.vercel.app/'],
		thumbnail: imageSources.projects['e-commerce-app'][0],
		images: imageSources.projects['e-commerce-app'],
		tags: ['NextJS', 'TailwindCSS', 'Typescript', 'Stripe'],
	},

	{
		name: 'Social Media App',
		links: [
			'https://social-media-app-production.up.railway.app',
			'https://social-media-app-eoga.onrender.com/',
		],
		thumbnail: imageSources.projects['social-media-app'][5],
		images: imageSources.projects['social-media-app'],
		tags: [
			'ReactJS',
			'ExpressJS',
			'MongoDB',
			'MUI',
			'WebSockets',
			'Typescript',
			'React Router',
			'React Query',
		],
	},
	{
		name: 'Instant Messaging App',
		links: [
			'https://messaging-app.up.railway.app',
			'https://messaging-app-2b7q.onrender.com',
		],
		thumbnail: imageSources.projects['messaging-app'][0],
		images: imageSources.projects['messaging-app'],
		tags: [
			'ReactJS',
			'ExpressJS',
			'MongoDB',
			'MUI',
			'WebSockets',
			'Typescript',
			'React Router',
			'React Query',
		],
	},

	{
		name: 'Airbnb Clone',
		links: ['https://airbnb-clone-rust-omega.vercel.app/'],
		thumbnail: imageSources.projects['airbnb-clone'][1],
		images: imageSources.projects['airbnb-clone'],
		tags: [
			'NextJS',
			'Typescript',
			'TailwindCSS',
			'Next-auth',
			'Jotai',
			'Drizzle',
			'Prisma',
		],
	},
];

export default PROJECTS;
