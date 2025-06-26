/**
 *
 */
export const NAME = 'Mohammad El-Hassan';

/**
 *
 */
export const GITHUB_HANDLE = '@mohammadelhsn';

/**
 *
 */
export const GITHUB = 'https://github.com/mohammadelhsn';
/**
 *
 */
export const EMAIL = 'mohammadelhsn@gmail.com';

/**
 *
 */
export const YOUTUBE = 'https://youtube.com/@mohammadelhsn';

/**
 *
 */
export const baseLab = 'elha7950_l';

/**
 *
 */
export const baseAssignment = 'elha7950_a';

/**
 *
 */
export interface pageData {
	title: string;
	description: string;
	numberOfEntries: number;
}

/**
 *
 */
export const PAGEDATA: pageData[] = [
	{
		title: '📝 Assignments',
		description:
			'Here are the documented assignments with source code and auto-generated Doxygen documentation:',
		numberOfEntries: 10,
	},
	{
		title: '🔬 Labs',
		description:
			'Here are the documented labs with source code and auto-generated Doxygen documentation:',
		numberOfEntries: 9,
	},
];

export interface ExampleData {
	title: string;
	url: string;
}

export const EXAMPLEDATA: ExampleData[] = [
	{
		title: "01-C-Program-Structure-and-Organization",
		url: `01-C-Program-Structure-and-Organization/index.html`
	},
	{
		title: "02-Data type-variables-and-controls",
		url: "02-Data type-variables-and-controls/index.html"
	}
]