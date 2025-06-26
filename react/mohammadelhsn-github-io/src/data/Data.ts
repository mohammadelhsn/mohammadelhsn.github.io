/**
 *
 */
export const NAME = 'Mohammad El-Hassan';

/**
 *
 */
export const GITHUB = 'https://github.com/mohammadelhsn';

/**
 *
 */
export const YOUTUBE = 'https://youtube.com/@mohammadelhsn';

/**
 *
 */
export const EMAIL = 'mohammadelhsn@gmail.com';

/**
 *
 */
export const baseURL = 'https://mohammadelhsn.github.io';

/**
 *
 */
export interface Projects {
	name: string;
	desc: string;
	url: string;
}

/**
 *
 */
export const PROJECTS: Projects[] = [
	{
		name: 'Personal Portfolio Website',
		desc: 'A fully responsive portfolio website showcasing my skills, projects, and contact information. Built with HTML, CSS, and JavaScript.',
		url: baseURL,
	},
	{
		name: 'CP104 - Introduction to Programming with Python',
		desc: 'Coursework, assignments, and projects from CP104 at Wilfrid Laurier University. The course covers foundational programming concepts using Python, including variables, control structures, functions, object-oriented programming, and basic algorithms.',
		url: `${baseURL}/CP104`,
	},
	{
		name: 'CP164 - Data Structures I with Python',
		desc: 'Fundamental data structures in Python including lists, stacks, queues, and trees, with a focus on algorithm design and efficiency.',
		url: `${baseURL}/CP164`,
	},
	{
		name: 'CP213 - Object-Oriented Programming with Java',
		desc: 'Java-based projects exploring object-oriented principles such as inheritance, polymorphism, interfaces, and GUI development.',
		url: `${baseURL}/CP213`,
	},
	{
		name: 'CP216 - Introduction to Microprocessors',
		desc: 'Coursework and projects focused on microprocessor systems using ARMv7, covering assembly programming, memory, and embedded systems.',
		url: `${baseURL}/CP216`,
	},
	{
		name: 'CP264 - Data Structures II with C',
		desc: 'Advanced data structures and algorithms in C, including trees, hashing, recursion, graphs, and algorithm analysis.',
		url: `${baseURL}/CP264`,
	},
];
