import type { FirestoreProject } from './Firestore';

/**
 * @description My name
 */
export const NAME = 'Mohammad El-Hassan';

/**
 * @description My username
 */
export const USERNAME = 'mohammadelhsn';

/**
 * @description My GitHub handle
 */
export const GITHUB_HANDLE = `@${USERNAME}`;

/**
 *
 */
export const LINKEDIN = 'https://www.linkedin.com/in/mohammadelhsn';

/**
 * @description My GitHub URL
 */
export const GITHUB = `https://github.com/${USERNAME}`;

/**
 * @description My YouTube URL
 */
export const YOUTUBE = `https://youtube.com/@${USERNAME}`;

/**
 * @description My Email
 */
export const EMAIL = `${USERNAME}@gmail.com`;

/**
 * @description My Base URL for my website
 */
export const baseURL = `https://${USERNAME}.github.io`;

export type ProjectCardOpts = {
	proj: FirestoreProject;
};
