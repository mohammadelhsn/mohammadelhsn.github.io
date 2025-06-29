import React from 'react';

/**
 *
 */
export const NAME = 'Mohammad El-Hassan';

/**
 *
 */
export const USERNAME = 'mohammadelhsn';

/**
 *
 */
export const GITHUB_HANDLE = `@${USERNAME}`;

/**
 *
 */
export const GITHUB = `https://github.com/${USERNAME}`;
/**
 *
 */
export const EMAIL = `${USERNAME}@gmail.com`;

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
export const baseURL = 'https://mohammadelhsn.github.io/';
/**
 *
 */
export interface pageData {
	title: string;
	description: string;
	numberOfEntries: number;
}

export type ItemType = 'lab' | 'example' | 'assignment';
export interface ItemListOpts {
	itemType: ItemType;
}
export interface AssignmentItemOpts {
	key: number;
	link: string;
	adds: string;
	type: ItemType;
}

export interface SectionOpts {
	title: string;
	children: React.ReactNode;
}

export interface TopicOpts {
	eventKey: string;
	title: string;
	items: string[];
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
	{
		title: '💡 Examples',
		description:
			'Below are documented example programs that explore various C programming concepts and data structures:',
		numberOfEntries: 31,
	},
];

export interface ExampleData {
	title: string;
	url: string;
}

export const EXAMPLEDATA: ExampleData[] = [
	{
		title: '01 - C Program Structure & Organization',
		url: `01-C-Program-Structure-and-Organization/`,
	},
	{
		title: '02 - Data Types, Variables & Controls',
		url: '/02-Data type-variables-and-controls/',
	},
	{
		title: '03 - Basic Operations',
		url: '/03-Basic-Operations/',
	},
	{
		title: '04 - Bitwise Operations',
		url: '/04-Bitwise-Operations/',
	},
	{
		title: '05 - Flow Control',
		url: '/05-Flow-Control/',
	},
	{
		title: '06 - Functions',
		url: '/06-Functions/',
	},
	{
		title: '07 - Specifiers & Scope',
		url: '/07-Specifiers-and-Scope/',
	},
	{
		title: '08 - Pointers',
		url: '/08-Pointers/',
	},
	{
		title: '09 - Arrays',
		url: '/09-Arrays/',
	},
	{
		title: '10 - Array-sort',
		url: '/10-Array-sort/',
	},
	{
		title: '11 - 2D Arrays',
		url: '/11-2D-arrays/',
	},
	{
		title: '12 - String',
		url: '/12-String/',
	},
	{
		title: '13 - Structure',
		url: '/13-Structure/',
	},
	{
		title: '14 - Union',
		url: '/14-Union/',
	},
	{
		title: '15 - Enumeration',
		url: '/15-Enumeration/',
	},
	{
		title: '16 - File Read',
		url: '/16-File-Read/',
	},
	{
		title: '17 - File Write',
		url: '/17-File-Write/',
	},
	{
		title: '18 - CSV File Read & Write',
		url: '/18-CSV-File-Read-and-Write/',
	},
	{
		title: '19 - LinkedLists',
		url: '/19-LinkedLists/',
	},
	{
		title: '20 - LinkedList Separate',
		url: '/20-LinkedList-Separate/',
	},
	{
		title: '21 - Queues',
		url: '/21-Queues/',
	},
	{
		title: '22 - Stacks',
		url: '22-Stacks',
	},
	{
		title: '23 - Stack Applications',
		url: '/23-Stack-Applications/',
	},
	{
		title: '24 - Trees',
		url: '/24-Trees/',
	},
	{
		title: '25 - Tree Applications',
		url: '/25-Tree-Applications/',
	},
	{
		title: '26 - AVL Trees',
		url: '/26-AVL-Trees',
	},
	{
		title: '27 - Red Black Tree & Others',
		url: '/27-Red-Black-Tree-and-Others/',
	},
	{
		title: '28 - Hash Tables',
		url: '/28-Hash-Tables',
	},
	{
		title: '29 - Heaps',
		url: '/29-Heaps/',
	},
	{
		title: '30 - Graph representations & Operations',
		url: '/30-Graph-representations-and-operations/',
	},
	{
		title: '31 - Application algorithms on graphs',
		url: '/31-Application-algorithms-on-graphs/',
	},
];

export const TopicsData: TopicOpts[] = [
	{
		items: ['Arrays and Linked Lists', 'Stacks and Queues', 'Recursion'],
		title: '📚 Core Data Structures',
		eventKey: '0',
	},
	{
		items: [
			'Trees and Binary Search Trees (BST)',
			'Graphs and Graph Algorithms',
		],
		title: '🌲 Trees & Graphs',
		eventKey: '1',
	},
	{
		items: ['Hash Tables', 'Sorting and Searching Algorithms'],
		title: '⚙️ Algorithms & Hashing',
		eventKey: '2',
	},
];

export interface TechItemOpts {
	emoji: string;
	bolded: string;
	nonBolded: string;
}

export const TechData: TechItemOpts[] = [
	{
		emoji: '💻',
		bolded: 'Programming Language:',
		nonBolded: 'C',
	},
	{
		emoji: '🧰',
		bolded: 'Development Environment:',
		nonBolded: 'VS Code (preferred), Eclipse',
	},
	{
		emoji: '🔗',
		bolded: 'Version Control:',
		nonBolded: 'Git & GitHub',
	},
];

export interface CardTypes {
	title: string;
	desc: string;
	itemType: ItemType;
}
