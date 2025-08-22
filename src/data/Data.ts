import Email from '@mui/icons-material/Email';
import type { FooterProps } from './Types';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

/** My name */
export const NAME = 'Mohammad El-Hassan';

/** My username */
export const USERNAME = 'mohammadelhsn';

/** My GitHub handle */
export const GITHUB_HANDLE = `@${USERNAME}`;

/** My LinkedIn */
export const LINKEDIN = 'https://www.linkedin.com/in/mohammadelhsn';

/** My GitHub URL */
export const GITHUB = `https://github.com/${USERNAME}`;

/** My YouTube URL */
export const YOUTUBE = `https://youtube.com/@${USERNAME}`;

/** My Email */
export const EMAIL = `${USERNAME}@gmail.com`;

/** My Base URL for my website */
export const baseURL = `https://${USERNAME}.github.io`;

/** The buttons in the footer */
export const footerButtons: FooterProps[] = [
	{
		title: 'Email',
		type: 'email',
		ariaLabel: 'Send Email',
		icon: Email,
		href: `mailto:${EMAIL}`,
	},
	{ title: 'GitHub', type: 'link', href: `${GITHUB}`, icon: GitHub },
	{ title: 'LinkedIn', type: 'link', href: `${LINKEDIN}`, icon: LinkedIn },
];
